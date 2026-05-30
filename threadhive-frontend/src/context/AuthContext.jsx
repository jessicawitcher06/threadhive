import { useDispatch, useSelector } from 'react-redux';
import { loginUser, logout, updateUser } from '../store/slices/authSlice';

export function AuthProvider({ children }) {
  return children;
}

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  return {
    token,
    user,
    loginUser: (data) => dispatch(loginUser(data)),
    logout: () => dispatch(logout()),
    updateUser: (updatedUser) => dispatch(updateUser(updatedUser)),
  };
};
