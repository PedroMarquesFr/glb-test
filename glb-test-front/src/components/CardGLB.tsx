import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';
type Props = {
  glbFIle: GLBFile;
};

const CardGLB: React.FC<Props> = (props) => {
  let navigate = useNavigate();
  const maxLength = 30;
  const {
    glbFIle: { name, url, size, id },
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
        <section onClick={() => navigate(`/view/${id}`)} className="cursor-pointer hover:underline underline-offset-3">
          <CardTitle className="text-base">
            {name.length > maxLength
              ? `${name.slice(0, maxLength - 3)}...`
              : name}
          </CardTitle>
          <CardDescription>{size / 1000}KB</CardDescription>
        </section>
      </CardHeader>
    </Card>
  );
};

export default CardGLB;
