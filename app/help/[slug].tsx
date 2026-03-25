// app/help/[slug]/index.tsx

import { useLocalSearchParams } from 'expo-router';
import { Calendar } from 'lucide-react-native';
import { Pressable, ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';
import { getArticleBySlug } from '@/lib/help';

export default function ArticleScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <View className='flex-1 bg-background-0 dark:bg-background-950'>
        <View className='flex-1 items-center justify-center px-4'>
          <Text className='text-lg font-semibold text-typography-900 dark:text-typography-0 mb-2'>
            Article Not Found
          </Text>
          <Text className='text-sm text-typography-500 text-center'>
            The article you're looking for doesn't exist.
          </Text>
        </View>
      </View>
    );
  }

  const lines = article.content.trim().split('\n').filter(Boolean);

  const makeKey = (type: string, content: string, idx: number): string => {
    const sample = content.replace(/[^a-zA-Z0-9]/g, '').slice(0, 8);
    return `${type}-${sample}-${idx}`;
  };

  const renderLine = (line: string, idx: number): React.ReactNode => {
    const trimmed = line.trim();

    if (trimmed.startsWith('## ')) {
      return (
        <Text
          key={makeKey('h2', trimmed, idx)}
          className='text-xl font-bold text-typography-900 dark:text-typography-0 mt-6 mb-3'
        >
          {trimmed.replace('## ', '')}
        </Text>
      );
    }

    if (trimmed.startsWith('### ')) {
      return (
        <Text
          key={makeKey('h3', trimmed, idx)}
          className='text-lg font-semibold text-typography-900 dark:text-typography-0 mt-4 mb-2'
        >
          {trimmed.replace('### ', '')}
        </Text>
      );
    }

    if (/^[1-5]\. /.test(trimmed)) {
      return (
        <View
          key={makeKey('ol', trimmed, idx)}
          className='flex-row gap-2 mb-2 pl-2'
        >
          <Text className='text-sm text-typography-900 dark:text-typography-0 font-semibold w-5'>
            {trimmed.charAt(0)}.
          </Text>
          <Text className='text-sm text-typography-500 flex-1 leading-relaxed'>
            {trimmed.substring(2)}
          </Text>
        </View>
      );
    }

    if (trimmed.startsWith('- ')) {
      return (
        <View
          key={makeKey('ul', trimmed, idx)}
          className='flex-row gap-2 mb-1 pl-4'
        >
          <Text className='text-typography-500'>•</Text>
          <Text className='text-sm text-typography-500 flex-1 leading-relaxed'>
            {trimmed.replace('- ', '')}
          </Text>
        </View>
      );
    }

    if (trimmed.startsWith('|') && trimmed.includes('|')) {
      const cells = trimmed
        .split('|')
        .filter(Boolean)
        .map((c) => c.trim());
      if (cells.length > 0 && !trimmed.includes('---')) {
        return (
          <View
            key={makeKey('row', trimmed, idx)}
            className={`flex-row py-2 ${
              idx > 0 && !lines[idx - 1].includes('---')
                ? 'border-t border-outline-200 dark:border-outline-800'
                : ''
            }`}
          >
            {cells.map((cell) => {
              const cellKey = cell.replace(/[^a-zA-Z0-9]/g, '').slice(0, 6);
              return (
                <Text
                  key={`cell-${cellKey}-${idx}`}
                  className={`flex-1 text-sm text-typography-500 ${
                    idx === 0 ? 'font-semibold' : ''
                  }`}
                >
                  {cell}
                </Text>
              );
            })}
          </View>
        );
      }
    }

    if (trimmed.startsWith('>')) {
      return (
        <View
          key={makeKey('quote', trimmed, idx)}
          className='p-3 rounded-lg bg-primary-5 border-l-4 border-primary-500 my-3'
        >
          <Text className='text-sm text-typography-500 italic leading-relaxed'>
            {trimmed.replace('> ', '')}
          </Text>
        </View>
      );
    }

    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      return (
        <Text
          key={makeKey('bold', trimmed, idx)}
          className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'
        >
          {trimmed.replace(/\*\*/g, '')}
        </Text>
      );
    }

    if (trimmed.length === 0) {
      return null;
    }

    return (
      <Text
        key={makeKey('p', trimmed, idx)}
        className='text-sm text-typography-500 leading-relaxed mb-2'
      >
        {trimmed}
      </Text>
    );
  };

  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='px-4 py-6'>
          <View className='flex-row items-center gap-2 mb-3'>
            <View className='px-2 py-1 rounded-md bg-primary-500/10'>
              <Text className='text-xs font-medium text-primary-500'>
                {article.category}
              </Text>
            </View>
          </View>

          <Text className='text-2xl sm:text-3xl font-bold text-typography-900 dark:text-typography-0 mb-3'>
            {article.title}
          </Text>

          {article.description && (
            <Text className='text-base text-typography-500 leading-relaxed mb-6'>
              {article.description}
            </Text>
          )}

          <View className='h-px bg-outline-200 dark:bg-outline-800 mb-6' />

          <View>{lines.map((line, idx) => renderLine(line, idx))}</View>
        </View>

        <View className='px-4 py-6'>
          <View className='p-5 rounded-2xl bg-background-50 dark:bg-background-900 border border-outline-200 dark:border-outline-800'>
            <View className='flex-row items-start gap-3'>
              <View className='w-10 h-10 rounded-lg bg-primary-500/10 items-center justify-center shrink-0'>
                <Calendar size={18} className='text-primary-500' />
              </View>
              <View className='flex-1'>
                <Text className='text-sm font-semibold text-typography-900 dark:text-typography-0 mb-1'>
                  Still need help?
                </Text>
                <Text className='text-xs text-typography-500 mb-3'>
                  Our team is available Saturday through Thursday, 9am to 7pm.
                </Text>
                <Pressable className='self-start px-3 py-2 rounded-lg bg-primary-500'>
                  <Text className='text-xs font-semibold text-white'>
                    Contact us
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
