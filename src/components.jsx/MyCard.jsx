import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Link,
} from "framework7-react";

const MyCard = ({ index }) => {
  return (
    <Card className="demo-card-header-pic">
      <CardHeader
        className="no-border"
        valign="bottom"
        style={{
          backgroundImage: `url(https://cdn.framework7.io/placeholder/nature-1000x600-${
            (index % 10) + 1
          }.jpg)`,
          height: "40vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        Journey To Mountains
      </CardHeader>
      <CardContent>
        <p className="date">Posted on January 21, 2015</p>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
      </CardContent>
      <CardFooter>
        <Link>Like</Link>
        <Link href={`/detail/${index + 1}/`}>Read more</Link>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
