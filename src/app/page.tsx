'use client';

import { Container, Stack, Group, Divider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Profile } from '@/components/profile/Profile';
import { SocialLinks } from '@/components/social/SocialLinks';
import { Projects } from '@/components/projects/Projects';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Teams } from '@/components/teams/Teams';
import { loadResumeData, ResumeData } from '@/lib/resume';

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    loadResumeData().then(setResumeData).catch(console.error);
  }, []);

  if (!resumeData) return null;

  return (
    <div className="min-h-screen py-8">
      <Container id="resume-container" size="md">
        <Stack gap="xl">
          <Group justify="flex-end">
            <ThemeToggle />
          </Group>
          <Stack gap="xl">
            <Stack gap="md">
              <Profile
                personalInfo={resumeData.personal_info}
                skills={resumeData.skills?.items}
              />
            </Stack>
            <Stack gap="md">
              <SocialLinks socialLinks={resumeData.social_links} />
              <Divider />
            </Stack>
            {resumeData.teams && (
              <Stack gap="md">
                <Teams teams={resumeData.teams.items} />
                <Divider />
              </Stack>
            )}
            <Stack gap="md">
              <Projects projects={resumeData.projects.items} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
