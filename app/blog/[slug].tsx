// app/blog/[slug].tsx

import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { Text } from '@/components/ui/text';

const BLOG_POSTS: Record<
  string,
  { title: string; content: string; author: string; date: string }
> = {
  'exploring-sundarbans': {
    title: 'Exploring the Mystical Sundarbans',
    content:
      "A journey through the world's largest mangrove forest, home to the Royal Bengal Tiger. Discover the hidden wonders of this UNESCO World Heritage site.",
    author: 'Ahmed Rahman',
    date: 'March 15, 2026',
  },
  'coxs-bazar-guide': {
    title: "Cox's Bazar: Beyond the Beach",
    content:
      "Discover hidden gems along the world's longest natural beach. From fishing villages to sunset viewpoints, there's more to explore.",
    author: 'Nadia Islam',
    date: 'March 10, 2026',
  },
};

export default function BlogPostScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const post = BLOG_POSTS[slug as string] || {
    title: 'Blog Post',
    content:
      'This article is coming soon. Check back later for travel guides and tips.',
    author: 'GoShareBD Team',
    date: '2026',
  };

  return (
    <View className='flex-1 bg-background-0 dark:bg-background-950'>
      <ScrollView
        className='flex-1'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className='pt-12 pb-6 px-4'>
          <Text className='text-xs text-typography-500 mb-2'>{post.date}</Text>
          <Text className='text-2xl font-bold text-typography-950 dark:text-typography-0 mb-2'>
            {post.title}
          </Text>
          <Text className='text-sm text-typography-500'>By {post.author}</Text>
        </View>
        <View className='px-4 py-6'>
          <Text className='text-sm text-typography-600 dark:text-typography-400 leading-relaxed'>
            {post.content}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
