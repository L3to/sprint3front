export const useLogout = (onLogout: { (): void; (): void; }) => {
    const handleLogout = () => {
      localStorage.removeItem("usuarioLogado");
      if (onLogout) {
        onLogout();
      }
    };
  
    return handleLogout;
  };