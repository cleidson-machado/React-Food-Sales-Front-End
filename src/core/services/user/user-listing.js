import apiPathUri from "../api-path";

//## Don't Work!.. the view cant' access a return data
const userListing = async () => {
  apiPathUri
    .get("user/find")
    .then((response) => response.data)
    .catch((err) => err);
};

export default userListing;
