import React from "react";
import "../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPostcard = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching postcard data:", error);
      }
    };

    fetchPostcard();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <div className="background"></div>
      <div className="wolf"></div>
      <div className="content-container">
        <div className="content">
          <div className="title" data-test="post-title">
            <img src=""></img>
            <h1>{post.title}</h1>
          </div>

          <div className="postext" id="post" data-test="post-body">
            <p>
              <a className="linkToText" href="{post.postText}">
                {post.postText}
              </a>
            </p>
          </div>

          <div className="footer" data-test="post-username">
            <h3>
              {post.username} "Lorem ipsum odor amet, consectetuer adipiscing
              elit. Dolor ex quam feugiat; quisque platea aliquet euismod. Quam
              mattis bibendum litora pellentesque torquent. Ornare eros nostra
              parturient mattis eleifend lectus litora euismod vehicula. Nunc
              diam bibendum aenean vulputate vestibulum faucibus. Tempor dictum
              varius nibh vivamus accumsan vitae non. Vestibulum parturient
              vivamus pharetra feugiat fusce? Nunc sagittis interdum purus
              cubilia vestibulum habitasse. Convallis nibh nunc platea finibus
              nisi vestibulum. Metus habitant duis integer massa inceptos. Nibh
              morbi tincidunt elementum mollis mauris faucibus. Diam elementum
              est elementum interdum interdum morbi. Laoreet a mollis nullam
              dictumst interdum suspendisse a fermentum. Volutpat aenean nullam
              magnis habitasse etiam mauris tempor aliquet scelerisque. Sapien
              montes platea consequat molestie laoreet erat quisque. Cursus
              fermentum nascetur nostra, nec nostra fusce. Erat curabitur dolor
              nisi; nulla tempus turpis nostra. Nisl cubilia condimentum quis
              blandit; commodo rutrum tempus. Ac vehicula sollicitudin ex eros,
              praesent lacus. Mus eros habitant aliquet himenaeos ante elementum
              donec amet sociosqu. Mauris inceptos diam imperdiet ligula;
              pulvinar pretium. Viverra magnis penatibus fermentum sociosqu enim
              nisi sollicitudin posuere. Et eros commodo ultrices vivamus
              tristique diam dui. Leo pulvinar id ligula facilisi sociosqu leo
              justo, egestas mus. Bibendum scelerisque condimentum ligula
              vulputate praesent maximus. Natoque aptent tortor velit
              ullamcorper est egestas magnis nam. Tempus litora purus donec
              molestie habitant diam cursus dolor. Lobortis lacus dapibus ex
              pellentesque finibus tempus urna. Nunc nascetur ornare urna
              vestibulum litora maecenas. Donec morbi amet commodo pellentesque
              curae maximus vestibulum pulvinar massa. Purus euismod id tellus
              posuere velit velit metus. Placerat aenean nostra mollis purus
              hac. Nostra purus volutpat nunc mattis sit lorem mi phasellus. At
              nibh consectetur pharetra mi elementum massa laoreet. Platea
              praesent varius hendrerit elementum venenatis. Quisque ac fames
              egestas euismod imperdiet class nascetur. Non montes duis varius a
              vel pulvinar. Ac natoque sed, montes in mollis dolor. Imperdiet
              efficitur cursus curae justo congue. Platea placerat ac libero
              donec venenatis sociosqu erat iaculis elit. Ornare mollis mi
              faucibus ornare nibh semper ante quam. Convallis lobortis neque;
              fringilla justo netus scelerisque. Hendrerit rutrum sociosqu
              suspendisse aenean ipsum nibh adipiscing duis. Torquent conubia
              inceptos in donec tempor nisl. Dapibus posuere vivamus consequat
              libero sit non. Laoreet senectus lobortis leo senectus
              sollicitudin dignissim. Praesent egestas libero vitae dui cubilia
              bibendum. Morbi tellus vehicula efficitur aenean eleifend lectus
              neque quis. Ante magna inceptos duis suspendisse justo cras.
              Mauris phasellus eleifend netus magna volutpat auctor. At
              penatibus tristique condimentum accumsan adipiscing eleifend.
              Condimentum varius feugiat curabitur scelerisque lorem nascetur
              mus mi. Nec ullamcorper eget orci primis nisi proin aliquet.
              Vivamus taciti cras fusce mollis ac viverra et iaculis. Pharetra
              turpis dignissim commodo non at semper porta tellus. Tristique
              neque dictumst litora, placerat nibh duis. Hendrerit massa potenti
              laoreet molestie dapibus. Primis est mauris luctus fringilla;
              nulla maecenas pellentesque. Maximus dui potenti habitasse
              habitasse ipsum. Diam congue eu vehicula sociosqu integer. Donec
              sollicitudin donec cubilia sed quisque? Amet lacus aliquet rhoncus
              gravida proin litora. Aenean proin finibus amet nec et aliquet at
              leo. Vulputate potenti fames etiam porttitor nec dui convallis.
              Lobortis amet duis inceptos gravida velit netus curabitur nisi.
              Nisi netus maximus dolor elit dis gravida taciti. Eu imperdiet
              amet aliquet fames tempus a. Consectetur himenaeos phasellus
              mauris feugiat commodo cursus lectus sagittis leo! Sagittis nec
              integer maximus potenti laoreet iaculis. Ipsum congue ligula
              aliquam dictum odio integer. Tristique elit habitasse, nunc
              parturient diam consequat netus montes. Parturient elit velit;
              maximus himenaeos elementum enim. Fames justo justo magna et
              pharetra mollis egestas felis. Iaculis leo consectetur; ultrices
              ad nullam purus etiam ut. Suspendisse fermentum elementum facilisi
              purus sed ipsum libero. Cubilia libero rhoncus elit diam rhoncus
              pharetra hac. Phasellus eros hac ultrices orci nascetur mattis
              posuere. Imperdiet congue eget facilisi sagittis pulvinar."
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
