import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";
import copyright from "../assets/svg/copyright.svg";
export default function Home() {
  const { t } = useTranslation();

  return (
    <Container style={{ padding: "80px 0 50px 0" }}>
      <h1>{t("wip")}</h1>
      <img alt='' srcSet='' width='100px' height='100px' src={copyright} />
    </Container>
  );
}
