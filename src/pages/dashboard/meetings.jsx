import React, { useState } from "react";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  PencilSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

export function Meetings() {
  const sampleVideoUrl =
    "https://youtu.be/r4ZEvFkigQ0?si=o8mAG6touq1R1IoP";

  const [activeTab, setActiveTab] = useState("notes");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="relative mt-8 h-80 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            controls
          >
            <source src={sampleVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Card className="mx-3 mt-20 mb-8 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/team-1.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Meeting 1
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Marketing Department
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value={activeTab}>
                <TabsHeader>
                  <Tab
                    value="notes"
                    onClick={() => handleTabChange("notes")}
                  >
                    <PencilSquareIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Notes
                  </Tab>
                  <Tab
                    value="transcripts"
                    onClick={() => handleTabChange("transcripts")}
                  >
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Transcripts
                  </Tab>
                  <Tab
                    value="insights"
                    onClick={() => handleTabChange("insights")}
                  >
                    <LightBulbIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Insights
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="grid-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-1">
            {/* Conditionally render content based on the active tab */}
            {activeTab === "notes" && (
              <ReactQuill
                theme="snow"
                placeholder="Add your notes here..."
                className="h-60 bg-gray-100 p-2 rounded no-outline"
                style={{ border: "none", boxShadow: "none" }} // Add style to remove border and box shadow
              />
            )}
            {activeTab === "transcripts" && (
              <div className="h-60 bg-gray-100 p-2 rounded no-outline">
                {/* Display transcript content here */}
                <p>Transcript content goes here.</p>
              </div>
            )}
            {activeTab === "insights" && (
              <div className="h-60 bg-gray-100 p-2 rounded no-outline">
                {/* Display insights content here */}
                <p>Insights content goes here.</p>
              </div>
            )}
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Meetings;
