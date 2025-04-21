import { useWorkspace } from "../../context/WorkspaceContext";
import DetailsCard from "../../components/detailsCard";
import FeatureTile from "../../components/featureTile";
import dashboard1 from "../../assets/dashboard-1.svg";
import playStore from "../../assets/play-store.svg";
import appStore from "../../assets/app-store.svg";
import download from "../../assets/download.svg";
import { features } from "./data";
import { WorkspaceCardData } from "../../types";

const imageBaseUrl =
  "https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main";

const Dashboard = () => {
  const { workspaceList, loading, error } = useWorkspace();

  const workspaceDataMapped: WorkspaceCardData[] = workspaceList?.map((space) => ({
    id: space.id,
    name: space.name,
    latitude: space.latitude,
    longitude: space.longitude,
    image: `${imageBaseUrl}/${space.images[0]}`,
    day_pass_price: space.day_pass_price,
    google_maps_url: space.google_maps_url,
  })) || [];

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section>
      {/* banner/hero */}
      <div className="banner flex flex-col lg:flex-row">
        <div className="banner-video flex justify-center order-1 lg:order-2 col-span-2 min-w-[388px] lg:pr-[120px]">
          <video
            className="w-full lg:w-auto object-cover"
            src="https://s3-figma-videos-production-sig.figma.com/video/1324254485881541552/TEAM/df05/05f4/-6b93-4411-a804-4c43509f7e23?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lAhyO7UHDer6Rq0JPF24Nu2hx0U~BC8ABYlDOi-VaubfN3Gve1CmttXdb20oDXvAQOEKIhRt~eU8e44v5gX9ggDSW6qvw8GebkPPXRzbVK~gD045C52vOr~dCkbP7BwL3qlt2o-3h5-UiUnDOtZKHbAUinTa0YHAsKYjutDjO-HeyLQ5TRGEC5QCMD2EaeQCuFwiXKRtVaCtx4ofMjZllUpA~qRk1HtcmJX21pwxLqOjfE9dhxDOY6zGeohXLuFxpegFOvn~7oqjEjXCTHU9~mSSI1JDRWbIxnoRO30GX8c3DNEVlXyQT6iCAyxjB0zPfmRmVPOd3e6-16Fe2uS-aw__"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className="banner-text px-5 lg:px-[120px] py-[27px] flex flex-col lg:grid lg:grid-cols-5 items-center relative z-10 order-2 lg:order-1"
          style={{
            backgroundImage: `url(${dashboard1})`,
          }}
        >
          <p className="text-primary heading-1 col-span-3 order-2 lg:block hidden text-left">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-logo-primary-2">₹199/-!</span>
          </p>

          <p className="text-primary heading-4 order-2 lg:hidden block text-center mt-4 font-semibold">
            Host your meeting with world-class amenities. Starting at{" "}
            <span className="text-[#FFBB00]">₹199/-!</span>
          </p>
        </div>
      </div>

      {/* features cards */}
      <section className="features my-4 lg:my-24 px-5 lg:px-[120px] py-8">
        <p className="heading-2 my-8">Why Choose us?</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {features.map((item) => (
            <div key={item.id} className={""}>
              <FeatureTile data={item} />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="details my-4 lg:my-24 px-5 lg:px-[120px] py-20 lg:py-8">
        <p className="heading-2 my-8">Our Space Overview</p>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-x-8 gap-y-8">
          {workspaceDataMapped.map((item) => (
            <DetailsCard key={item.id} data={item} />
          ))}
        </div>
      </section>

      {/* Download App card */}
      <section className="download-app my-1 lg:my-24 px-5 lg:px-[120px] py-1 lg:py-8">
        <p className="heading-2 mt-4 mb-4 lg:mb-56 text-[#263238] lg:text-[#605F5F]">
          Download our app now
        </p>
        <div className="relative lg:grid grid-cols-5 gap-x-32 bg-white border-[1px] border-[#00000014] rounded-lg shadow-[0px_2px_19px_0px_#00000012] py-12 px-6">
          <div className="absolute hidden lg:block bottom-0 left-10">
            <img src={download} alt="download" />
          </div>
          <div className="col-span-2" />
          <div className="col-span-3">
            <p className="text-[#605F5F] hidden lg:block heading-4 font-normal leading-[28px]">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
            <div className="lg:hidden flex justify-center block bottom-0 left-10">
              <img src={download} alt="download" />
            </div>
            <div className="flex justify-center gap-x-2 mt-8">
              <img className="cursor-pointer" src={playStore} alt="playstore" />
              <img className="cursor-pointer" src={appStore} alt="appstore" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;