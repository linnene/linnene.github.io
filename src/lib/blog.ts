import type { CollectionEntry } from 'astro:content';
import { existsSync } from 'node:fs';

export type BlogEntry = CollectionEntry<'blog'>;

export function sortByDate(entries: BlogEntry[]) {
  return [...entries].sort((a, b) => {
    const aPinned = a.data.pinned ? 1 : 0;
    const bPinned = b.data.pinned ? 1 : 0;
    if (aPinned !== bPinned) return bPinned - aPinned;
    return b.data.date.valueOf() - a.data.date.valueOf();
  });
}

export function publishedPosts(entries: BlogEntry[]) {
  return entries.filter((entry) => !entry.data.draft && entry.filePath && existsSync(entry.filePath));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function getAllTags(entries: BlogEntry[]) {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()].sort((a, b) => a[0].localeCompare(b[0], 'zh-CN'));
}

export function formatArchiveMonth(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
  }).format(date);
}

export function getArchiveMonths(entries: BlogEntry[]) {
  const months = new Map<string, { label: string; count: number }>();
  for (const entry of entries) {
    const id = `${entry.data.date.getFullYear()}-${String(entry.data.date.getMonth() + 1).padStart(2, '0')}`;
    const current = months.get(id);
    months.set(id, {
      label: formatArchiveMonth(entry.data.date),
      count: (current?.count ?? 0) + 1,
    });
  }
  return [...months.entries()].sort((a, b) => b[0].localeCompare(a[0]));
}
