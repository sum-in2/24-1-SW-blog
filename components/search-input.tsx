'use client';

import { X } from 'lucide-react';

import { useSearchStore } from '@/stores/search-store';
import { cn } from '@/lib/utils';

type SearchInputProps = {
  hasResults: boolean;
};

export function SearchInput({ hasResults }: SearchInputProps) {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);

  return (
    <>
      <input
        type="text"
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          placeholders[Math.floor(Math.random() * placeholders.length)]
        }
        className={cn(
          'w-full rounded border px-2 placeholder:opacity-50',
          hasResults ? 'sm:text-2xl' : 'sm:text-4xl',
          'border-slate-400 bg-slate-100 text-slate-700',
          'dark:border-slate-500 dark:bg-slate-700 dark:text-rose-50',
        )}
        aria-label="Search Posts"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className={cn(
            'absolute right-14 top-[1.1rem]',
            hasResults ? 'sm:top-5' : 'sm:top-7',
          )}
        >
          <X
            className="icon-base text-slate-500 dark:text-slate-400"
            aria-label="Clear"
          />
        </button>
      )}
    </>
  );
}

const placeholders = [
  '배우고 싶은 주제가 있나요?',
  '게임 개발의 베스트 프랙티스를 알고싶나요?',
  // TODO: '검색 플레이스 홀더 추가',
];
