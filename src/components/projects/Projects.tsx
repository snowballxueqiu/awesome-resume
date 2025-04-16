'use client';

import { Text, Title, Stack, Group, Button, Image, Grid, Box } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { Project } from '@/lib/resume';
import { Modal, ActionIcon } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';
import { getColor } from '@/lib/github-color';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [opened, setOpened] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (projectIndex: number, imageIndex: number) => {
    setCurrentProjectIndex(projectIndex);
    setCurrentImageIndex(imageIndex);
    setOpened(true);
  };

  const nextImage = () => {
    if (projects[0]?.images && currentImageIndex < projects[0].images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <Stack gap="xl">
      {projects.map((project, index) => (
        <Box key={index}>
          <Grid gutter="xl">
            <Grid.Col span={3}>
              <Title order={2} size="h3" fw={500}>{project.title}</Title>
            </Grid.Col>
            <Grid.Col span={9}>
              <Stack gap="md">
                <Text size="md" style={{ lineHeight: 1.6 }}>{project.description}</Text>
                {project.language && (
                  <Group gap="sm">
                    {(Array.isArray(project.language) ? project.language : [project.language]).map((lang, i) => (
                      <Box
                        key={i}
                        style={{
                          backgroundColor: getColor(lang).bgColor,
                          color: getColor(lang).textColor,
                          borderRadius: '8px',
                          padding: '2px 8px',
                          display: 'inline-block',
                          fontSize: '0.75rem'
                        }}
                      >
                        {lang}
                      </Box>
                    ))}
                  </Group>
                )}
                <Group gap="sm">
                  {project.links.length > 0 && (
                    project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        component="a"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        size="sm"
                        leftSection={<IconExternalLink size={16} />}
                      >
                        查看项目
                      </Button>
                    ))
                  )}
                  {project.images && project.images.length > 0 && (
                    <Button
                      variant="subtle"
                      size="sm"
                      onClick={() => handleImageClick(index, 0)}
                    >
                      预览图片
                    </Button>
                  )}
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Box>
      ))}

      <Modal opened={opened} onClose={() => setOpened(false)} title="图片预览" size="xl">
        <Image src={projects[currentProjectIndex]?.images?.[currentImageIndex] ?? ''} height={600} alt="项目图片" loading="lazy" style={{ maxWidth: '100%' }} />
        <Group justify="center" mt="md">
          <ActionIcon onClick={prevImage} disabled={currentImageIndex === 0}>
            <IconArrowLeft size={16} />
          </ActionIcon>
          <Text size="sm">{currentImageIndex + 1}/{projects[currentProjectIndex]?.images?.length ?? 0}</Text>
          <ActionIcon onClick={nextImage} disabled={!projects[currentProjectIndex]?.images || currentImageIndex === projects[currentProjectIndex].images.length - 1}>
            <IconArrowRight size={16} />
          </ActionIcon>
        </Group>
      </Modal>
    </Stack>
  );
}