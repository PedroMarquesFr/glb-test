import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import { Container } from './styles';
type Props = {
  glbFIle: GLBFile;
};

const CardGLB: React.FC<Props> = (props) => {
  const maxLength = 30;
  const {
    glbFIle: { name, url, size },
  } = props;
  return (
    <Card>
      <CardHeader>
        <iframe
          width="250"
          height="200"
          src={url}
          className="rounded-sm"
        ></iframe>
        <CardTitle className="text-base cursor-pointer">{name.length > maxLength?`${name.slice(0, maxLength - 3)}...`:name}</CardTitle>
        <CardDescription>{size/1000}KB</CardDescription>
        <section></section>
      </CardHeader>
    </Card>
  );
};

export default CardGLB;
