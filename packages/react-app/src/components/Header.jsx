import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="/">
      <PageHeader
        title="👩‍🎓 scholarship.buidlguidl.com"
        subTitle=""
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
