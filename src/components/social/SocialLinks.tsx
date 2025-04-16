'use client';

import { ActionIcon, Group } from '@mantine/core';
import { IconBrandGithub, IconMail } from '@tabler/icons-react';
import { SocialLinks as SocialLinksType } from '@/lib/resume';

interface SocialLinksProps {
  socialLinks: SocialLinksType;
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  const { github, email } = socialLinks;

  return (
    <Group gap="md" justify="center">
      {github && (
        <ActionIcon
          component="a"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="default"
          aria-label="GitHub"
        >
          <IconBrandGithub style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      )}
      {email && (
        <ActionIcon
          component="a"
          href={email}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="default"
          aria-label="Twitter"
        >
          <IconMail style={{ width: '70%', height: '70%' }} stroke={1.5} />
        </ActionIcon>
      )}
    </Group>
  );
}