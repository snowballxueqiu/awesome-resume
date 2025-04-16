import { Team } from '@/lib/resume';
import { Text, Title, Button } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

export function Teams({ teams }: { teams: Team[] }) {
  return (
    <div className="space-y-4">
      {teams.map((team) => (
        <div key={team.name} className="space-y-2">
          <Title order={3}>{team.name}</Title>
          <Text c="dimmed" size="sm">{team.role}</Text>
          <Text mt="sm">{team.contributions}</Text>
          {team.link && (
            <Button
              component="a"
              href={team.link}
              target="_blank"
              mt="sm"
              variant="subtle"
              size="sm"
              leftSection={<IconExternalLink size={16} />}
            >
              查看项目
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}