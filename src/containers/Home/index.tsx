import Layout from "components/Layout";
import Heading from "components/Heading";
import FileUploader from "components/FileUploader";

const HomeContainer = () => {
  return (
    <Layout>
      <Heading m="0 0 50px">json-navigator🧭</Heading>
      <FileUploader />
    </Layout>
  );
};

export default HomeContainer;
