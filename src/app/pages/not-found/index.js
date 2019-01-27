import React from "react";
import Page from "../../components/seo/page-with-meta";
import { MyDeleteButton } from "../../components/ui/material-ui/my-buttons";
export default () => (
  <Page
    id="not-found"
    title="Not Found"
    description="No page was found"
    noCrawl
  >
    <p>I can't find your requested page.</p>
    <MyDeleteButton> a button for rendering test</MyDeleteButton>
  </Page>
);
