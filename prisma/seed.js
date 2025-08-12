const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Bino.bot WhatsApp AI Assistant - Main Platform
  await prisma.page.upsert({
    where: { slug: 'bino-bot-platform' },
    update: {},
    create: {
      slug: 'bino-bot-platform',
      title: 'Bino.bot - Your AI Assistant on WhatsApp',
      description: 'Meet Bino.bot, the intelligent WhatsApp AI assistant that brings powerful AI capabilities directly to your favorite messaging app. No downloads, no new apps to learn.',
      components: [
        {
          id: 'bino-bot-platform-ImageBlock-0',
          type: 'ImageBlock',
          props: {
            src: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=1200&h=600&fit=crop&auto=format',
            alt: 'WhatsApp AI Assistant Bino.bot',
            width: 1200,
            height: 600,
            caption: 'Bino.bot - AI assistance directly in your WhatsApp conversations'
          }
        },
        {
          id: 'bino-bot-platform-TextSection-1',
          type: 'TextSection',
          props: {
            heading: 'AI Assistant That Lives in WhatsApp',
            content: 'Bino.bot brings advanced AI capabilities directly to WhatsApp - the app you already use every day. No need to download new apps, learn new interfaces, or switch between platforms. Just chat with Bino.bot like you would with any contact, and get instant AI-powered assistance for work, creativity, and daily tasks.',
            alignment: 'center'
          }
        },
        {
          id: 'bino-bot-platform-StatsBox-2',
          type: 'StatsBox',
          props: {
            stats: [
              {
                label: 'WhatsApp Users',
                value: '2.8B+',
                icon: 'users',
                change: 'Global reach',
                description: 'Available to billions of WhatsApp users worldwide'
              },
              {
                label: 'Response Time',
                value: '<2s',
                icon: 'trending',
                change: 'Instant replies',
                description: 'Lightning-fast AI responses in your chats'
              },
              {
                label: 'Context Memory',
                value: '100%',
                icon: 'activity',
                change: 'Always remembers',
                description: 'Maintains conversation context across all chats'
              },
              {
                label: 'Security',
                value: 'E2E',
                icon: 'rating',
                change: 'WhatsApp encrypted',
                description: 'End-to-end encryption built into WhatsApp'
              }
            ]
          }
        },
        {
          id: 'bino-bot-platform-Card-3',
          type: 'Card',
          props: {
            title: '🔒 End-to-End Encrypted by WhatsApp',
            content: 'Your conversations with Bino.bot are protected by WhatsApp\'s industry-leading end-to-end encryption. Your messages, questions, and AI responses are completely private and secure - only you can read them.',
            variant: 'elevated'
          }
        },
        {
          id: 'bino-bot-platform-Card-4',
          type: 'Card',
          props: {
            title: '📱 No New Apps to Learn',
            content: 'Use the WhatsApp interface you already know and love. No downloads, no account creation, no learning curve. Simply add Bino.bot as a contact and start chatting immediately.',
            variant: 'outlined'
          }
        },
        {
          id: 'bino-bot-platform-Card-5',
          type: 'Card',
          props: {
            title: '🧠 Remembers Your Conversations',
            content: 'Bino.bot maintains context across all your conversations. It remembers your preferences, previous questions, and ongoing projects, making each interaction more personalized and effective.',
            variant: 'default'
          }
        },
        {
          id: 'bino-bot-platform-CTA-6',
          type: 'CTA',
          props: {
            text: 'Start Chatting with Bino.bot',
            href: 'https://bino.bot',
            variant: 'primary',
            size: 'large',
            external: true
          }
        }
      ]
    }
  });

  // Why Choose Bino.bot - Benefits & Features
  await prisma.page.upsert({
    where: { slug: 'bino-bot-features' },
    update: {},
    create: {
      slug: 'bino-bot-features',
      title: 'Why Choose Bino.bot - WhatsApp AI Assistant',
      description: 'Discover why Bino.bot is the smartest choice for AI assistance. Built for WhatsApp with privacy, convenience, and intelligence at its core.',
      components: [
        {
          id: 'bino-bot-features-TextSection-0',
          type: 'TextSection',
          props: {
            heading: 'Why Bino.bot is the Perfect AI Assistant',
            content: 'In a world full of AI tools and apps, Bino.bot stands out by meeting you where you already are - on WhatsApp. No learning curves, no privacy concerns, no app switching. Just intelligent assistance when and where you need it.',
            alignment: 'center'
          }
        },
        {
          id: 'bino-bot-features-Card-1',
          type: 'Card',
          props: {
            title: '🔐 End-to-End Encrypted by Default',
            content: 'Your conversations with Bino.bot are protected by WhatsApp\'s military-grade end-to-end encryption. Unlike other AI platforms, your data never sits on unsecured servers. Every message, question, and response is completely private and secure.',
            variant: 'elevated'
          }
        },
        {
          id: 'bino-bot-features-Card-2',
          type: 'Card',
          props: {
            title: '📱 No New Apps to Download or Learn',
            content: 'Use the WhatsApp interface you\'ve mastered over years. No tutorials, no onboarding, no new passwords to remember. Simply add Bino.bot as a contact and start getting AI assistance immediately using the chat app you already love.',
            variant: 'outlined'
          }
        },
        {
          id: 'bino-bot-features-ImageBlock-3',
          type: 'ImageBlock',
          props: {
            src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&h=500&fit=crop&auto=format',
            alt: 'WhatsApp conversation with AI assistant',
            width: 1000,
            height: 500,
            caption: 'Natural AI conversations in the familiar WhatsApp interface'
          }
        },
        {
          id: 'bino-bot-features-Card-4',
          type: 'Card',
          props: {
            title: '🧠 Remembers Context Across Conversations',
            content: 'Unlike other AI assistants that forget previous conversations, Bino.bot maintains context across all your chats. It remembers your projects, preferences, and conversation history, making each interaction more intelligent and personalized.',
            variant: 'default'
          }
        },
        {
          id: 'bino-bot-features-StatsBox-5',
          type: 'StatsBox',
          props: {
            stats: [
              {
                label: 'Setup Time',
                value: '0 min',
                icon: 'trending',
                change: 'Instant start',
                description: 'No downloads, registrations, or setup required'
              },
              {
                label: 'Privacy Level',
                value: '100%',
                icon: 'rating',
                change: 'WhatsApp secured',
                description: 'End-to-end encryption protects all conversations'
              },
              {
                label: 'Context Memory',
                value: 'Unlimited',
                icon: 'activity',
                change: 'Never forgets',
                description: 'Remembers all your conversations and preferences'
              },
              {
                label: 'Learning Curve',
                value: '0%',
                icon: 'users',
                change: 'Familiar interface',
                description: 'Use WhatsApp skills you already have'
              }
            ]
          }
        },
        {
          id: 'bino-bot-features-Card-6',
          type: 'Card',
          props: {
            title: '⚡ Instant Access, Anywhere',
            content: 'Whether you\'re on your phone, computer, or tablet, Bino.bot is available wherever WhatsApp is. No app switching, no browser tabs, no desktop applications. Your AI assistant is always just a message away.',
            variant: 'elevated'
          }
        },
        {
          id: 'bino-bot-features-Card-7',
          type: 'Card',
          props: {
            title: '🌍 Works in Every Language WhatsApp Supports',
            content: 'Communicate with Bino.bot in your preferred language. From English to Hindi, Spanish to Arabic, Bino.bot understands and responds in the language you\'re most comfortable with, making AI assistance truly global.',
            variant: 'outlined'
          }
        },
        {
          id: 'bino-bot-features-TextSection-8',
          type: 'TextSection',
          props: {
            heading: 'Ready to Experience AI the Smart Way?',
            content: 'Join thousands who have discovered the convenience of AI assistance without the hassle. Bino.bot brings powerful AI capabilities to the app you already use, with the privacy and security you deserve.',
            alignment: 'center'
          }
        },
        {
          id: 'bino-bot-features-CTA-9',
          type: 'CTA',
          props: {
            text: 'Chat with Bino.bot Now',
            href: 'https://bino.bot',
            variant: 'primary',
            size: 'large',
            external: true
          }
        }
      ]
    }
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });