import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config";
import { collection, query, where, getDocs } from "firebase/firestore";

function Link() {
  const { shorturl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUrl = async () => {
      const urlsCollection = collection(db, "urls");
      const q = query(urlsCollection, where("code", "==", shorturl));
      console.log(shorturl);
      try {
        const data = await getDocs(q);
        console.log(shorturl, data);

        // if (data.empty) {
        //   return navigate("/");
        // }
        const resData = data.docs[0].data();
        window.location.replace(resData.url);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/");
      }
    };

    fetchUrl();
  }, [shorturl, navigate]);

  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
}

export default Link;
