import React from "react";
import Blog1 from "./blog_1.jpg";
import Blog2 from "./blog_2.jpg";

const archive = () => {
  return (
    <div className="article">
      <article>
        <h4>Visitor's blog</h4>
        <h3>6/10/2018</h3>
        <h5>Where to Hike</h5>
        <img className="resize" src={Blog1} alt="#" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet placerat nisl. Integer semper rhoncus neque vel ullamcorper. Cras
          consequat ante in nisl eleifend interdum. Cras tincidunt nisi ac sem
          lobortis varius. Praesent consequat malesuada elit. Praesent vel
          tortor quis quam posuere pharetra tempor ac sem. Etiam rhoncus dictum
          commodo. Vivamus dolor lectus, iaculis pharetra maximus at, rhoncus ac
          nulla. Vestibulum ultrices vel eros vitae feugiat. Ut ligula est,
          hendrerit eu tempus a, malesuada ut velit. Maecenas a eleifend elit.
          Nullam purus orci, accumsan a nulla a, convallis mattis elit. Proin
          quis lorem urna. Suspendisse potenti. Morbi pretium tempus velit, vel
          aliquam massa porta vitae. Aenean feugiat arcu congue nisl
          pellentesque egestas.
        </p>

        <h3>6/20/2018</h3>
        <h5>Where to watch the Sunset</h5>
        <img src={Blog2} alt="#" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet placerat nisl. Integer semper rhoncus neque vel ullamcorper. Cras
          consequat ante in nisl eleifend interdum. Cras tincidunt nisi ac sem
          lobortis varius. Praesent consequat malesuada elit. Praesent vel
          tortor quis quam posuere pharetra tempor ac sem. Etiam rhoncus dictum
          commodo. Vivamus dolor lectus, iaculis pharetra maximus at, rhoncus ac
          nulla. Vestibulum ultrices vel eros vitae feugiat. Ut ligula est,
          hendrerit eu tempus a, malesuada ut velit. Maecenas a eleifend elit.
          Nullam purus orci, accumsan a nulla a, convallis mattis elit. Proin
          quis lorem urna. Suspendisse potenti. Morbi pretium tempus velit, vel
          aliquam massa porta vitae. Aenean feugiat arcu congue nisl
          pellentesque egestas.
        </p>
      </article>
    </div>
  );
};

export default archive;
