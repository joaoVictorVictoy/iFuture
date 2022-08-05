export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToSignUpPage = (navigate) => {
  navigate("/SignUp");
};

export const goToSignAddress = (navigate) => {
  navigate("/cadastrarendereco");
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToRestaurantDetailPage = (navigate, id) => {
  navigate(`/restaurantes/detalhes/1`);
};

export const goToRestaurantPage = (navigate,id) => {
  navigate(`/restaurantes/${id}`);
};
  
  export const goToCartPage = (navigate) => {
    navigate("/carrinho");
  };
  export const goToProfilePage = (navigate) => {
    navigate("/myProfile");
  };
  
  export const goToLastPage = (navigate) => {
    navigate(-1);
  };

  export const goToEditPage = (navigate) =>{
    navigate("/profileEditPage")
  }

  export const goToHome = (navigate) => {
    navigate("/feed");
  };
  
  export const goToSearch = (navigate) => {
    navigate("/busca");
  };
  