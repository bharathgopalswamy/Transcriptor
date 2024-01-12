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
                src="data:image/jpeg;base64,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"
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
                  Meeting with Marketing Dept
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
