import React from "react";

import { ProfileCard, ProfileContactInfo, ProfileContent, ProfileDesignation, ProfileImage, ProfileName, ProfileTags } from "@/components/ui/snappy-profile-card";

export default function SnappyProfileCardDemo() {
  return (
    <ProfileCard variant="default" hoverEffect={true}>
      <ProfileContent>
        <ProfileImage imageUrl="https://media.istockphoto.com/id/1399788030/photo/portrait-of-young-confident-indian-woman-pose-on-background.jpg?b=1&s=612x612&w=0&k=20&c=_VfWQI2t_aONL0FEFJ1Eki3QQkRwgxkAve0_z53oeKY=" imageAlt="Team member" />
        <ProfileName name="Alexa Chen" />
        <ProfileDesignation designation="Backend Developer" />
        <ProfileContactInfo email="robert@example.com" />
        <ProfileTags tags={[
          { text: "Node.js", color: "blue" },
          { text: "MongoDB", color: "green" },
        ]}
        />
      </ProfileContent>
    </ProfileCard>
  );
}
