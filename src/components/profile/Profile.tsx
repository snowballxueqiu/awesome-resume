'use client';

import { Avatar, Text, Title, Stack, Group, Badge } from '@mantine/core';
import { PersonalInfo, Skill } from '@/lib/resume';

interface ProfileProps {
  personalInfo: PersonalInfo;
  skills?: Skill[];
}

export function Profile({ personalInfo, skills }: ProfileProps) {
  const { name, title, bio, skills: personalSkills, interests } = personalInfo;

  return (
    <Stack gap="md" align="center">
      <Avatar src="/avatar.jpg" size={120} radius="50%" />
      <div className="text-center">
        <Title order={1} size="h2">{name}</Title>
        <Text size="lg" c="dimmed">{title}</Text>
      </div>
      <Text size="md" ta="center" maw={500}>
        {bio}
      </Text>
      {personalSkills && (
        <Stack gap="sm" align="center">
          <Text size="sm" c="dimmed">技能</Text>
          <Stack gap="sm" align="center">
            {personalSkills.map((skill, index) => (
              <Text key={index} size="sm">
                {skill}
              </Text>
            ))}
          </Stack>
        </Stack>
      )}
      {interests && (
        <Stack gap="sm" align="center">
          <Text size="sm" c="dimmed">兴趣</Text>
          <Stack gap="sm" align="center">
            {interests.map((interest, index) => (
              <Text key={index} size="sm">
                {interest}
              </Text>
            ))}
          </Stack>
        </Stack>
      )}
      {skills && (
        <Stack gap="sm" align="center">
          <Text size="sm" c="dimmed">技术能力</Text>
          <Group gap="sm" justify="center">
            {skills.map((skill) => (
              <Badge 
                key={skill.name} 
                color={skill.level === 1 ? 'blue' : 'gray'}
                variant="light"
              >
                {skill.name}
              </Badge>
            ))}
          </Group>
        </Stack>
      )}
    </Stack>
  );
}