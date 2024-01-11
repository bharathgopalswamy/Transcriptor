import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  LightBulbIcon,
  PencilIcon,
  PencilSquareIcon,

} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";

export function Meetings() {
  const sampleVideoUrl = 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';

  return (
    <>
      <div className="relative mt-8 h-80 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <video className="w-full h-full object-cover" autoPlay loop muted controls>
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
                src="/img/bruce-mars.jpeg"
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
                  CEO / Co-Founder
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <PencilSquareIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Notes
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Transcripts
                  </Tab>
                  <Tab value="settings">
                    <LightBulbIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Insights
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
             
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Meetings;
