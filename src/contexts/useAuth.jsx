import axios from "../utils/axios";
import { useNavigate, useLocation } from "react-router-dom";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { toast } from "react-toastify";

const AuthContext = createContext({
  user: null,
  error: null,
  isLoading: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  useEffect(() => {
    if (error) setError(null);
  }, [location.pathname]);

  useEffect(() => {
    axios
      .get("/users/me")
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {})
      .finally(() => setIsLoadingInitial(false));
  }, []);

  const signIn = async ({ setErrors, ...props }) => {
    setErrors([]);
    setIsLoading(true);

    axios
      .post("/auth/sign-in", props)
      .then((res) => {
        const userData = res.data.data;
        setUser(userData);
        navigate("/");
        toast.success(res.data.message);
      })
      .catch((error) => {
        if (![401, 422].includes(error.response.status)) throw error;
        if (error.response.status == 401)
          setErrors([error.response.data.message]);
        if (error.response.status == 422)
          setErrors(Object.values(error.response.data.errors).flat());
      })
      .finally(() => setIsLoading(false));
  };

  // const register = async ({ setErrors, ...props }) => {
  //   setErrors([]);

  //   axios
  //     .post("/auth/register", props)
  //     .then(() => mutate() && navigate("/login"))
  //     .catch((error) => {
  //       if (![401, 422, 409].includes(error.response.status)) throw error;
  //       if ([401, 409].includes(error.response.status))
  //         setErrors(error.response.data.message);
  //       if (error.response.status == 422)
  //         setErrors(Object.values(error.response.data.errors).flat());
  //     });
  // };

  const signOut = async () => {
    if (!error) {
      const { data } = await axios.delete("/auth/sign-out");
      setUser(null);
      toast.success(data.message);
    }
    navigate("/sign-in");
  };

  // useEffect(() => {
  // if (middleware == "guest" && redirectIfAuthenticated && user)
  //   navigate(redirectIfAuthenticated);
  // if (middleware == "auth" && !user && !error) navigate("/login");
  // if (middleware == "auth" && !user && error) logout();
  // }, [user, loading, error]);

  const memeoedValue = useMemo(
    () => ({ user, isLoading, error, signIn, signOut }),
    [user, isLoading, error]
  );

  return (
    <AuthContext.Provider value={memeoedValue}>
      {isLoadingInitial ? <LoadingScreen /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
