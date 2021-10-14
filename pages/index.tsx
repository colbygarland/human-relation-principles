import Head from 'next/head';

export default function Home() {
  const title = "Dale Carnegie's Human Relation Principles";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="p-6 lg:p-20 bg-gray-900">
        <h1 className="text-green-600 text-2xl lg:text-5xl lg:mb-16 font-bold">{title}</h1>
        <ListHeader>Fundamental Techniques in Handling People</ListHeader>
        <List>
          <ListItem>Don't criticize, condemn or complain</ListItem>
          <ListItem>Arouse in the other person an eager want</ListItem>
          <ListItem>Give honest, sincere, appreciation</ListItem>
        </List>
        <ListHeader>Six Ways to Make People Like You</ListHeader>
        <List>
          <ListItem>Become genuinely interested in other people</ListItem>
          <ListItem>Smile</ListItem>
          <ListItem>Remember that a person's name is to that person the sweetest and most important sound in any language</ListItem>
          <ListItem>Be a good listener. encourage others to talk about themselves</ListItem>
          <ListItem>Talk in terms of the other person's interests</ListItem>
          <ListItem>Make the other person feel important - and do it sincerely</ListItem>
        </List>
        <ListHeader>Twelve Ways to Win People to Your Way of Thinking</ListHeader>
        <List>
          <ListItem>The only way to get the best of an argument is to avoid it</ListItem>
          <ListItem>Show respect for the other person's opinion. never say, "you're wrong."</ListItem>
          <ListItem>If you are wrong admit it quickly and emphatically</ListItem>
          <ListItem>Begin in a friendly manner</ListItem>
          <ListItem>Get the other person saying "yes, yes"</ListItem>
          <ListItem>Let the other person do a great deal of the talking</ListItem>
          <ListItem>Let the other person feel that the idea is his or hers</ListItem>
          <ListItem>Try honestly to see things from the other person's point of view</ListItem>
          <ListItem>Be sympathetic with the other person's ideas and desires</ListItem>
          <ListItem>Appeal to the nobler motives</ListItem>
          <ListItem>Dramatize your ideas</ListItem>
          <ListItem>Throw down a challenge</ListItem>
        </List>
        <ListHeader>Be a Leader: How to Change People Without Giving Offense or Arousing Resentment</ListHeader>
        <List>
          <ListItem>Begin with praise and honest appreciation</ListItem>
          <ListItem>Call attention to people's mistakes indirectly</ListItem>
          <ListItem>Talk about your own mistakes before criticizing the other person</ListItem>
          <ListItem>Ask questions instead of giving direct orders</ListItem>
          <ListItem>Let the other person save face</ListItem>
          <ListItem>Praise the slightest improvement and praise every improvement. be "hearty in your approbation and lavish in your praise".</ListItem>
          <ListItem>Give the other person a fine reputation to live up to</ListItem>
          <ListItem>Use encouragement. make the fault seem easy to correct</ListItem>
          <ListItem>Make the other person happy about doing the thing you suggest</ListItem>
        </List>

        <footer className="text-white mt-20">
          Created with <span className="text-red-600">♥</span> by{' '}
          <a className="font-bold text-green-600 transition duration-200 hover:text-green-300" href="https://colbygarland.ca" target="_blank">
            Colby Garland
          </a>
        </footer>
      </div>
    </>
  );
}

function ListItem({ children }: any) {
  return <li className="mb-4">{children}</li>;
}

function ListHeader({ children }: any) {
  return <h3 className="text-green-600 text-xl lg:text-2xl font-bold mb-6 mt-10">{children}</h3>;
}

function List({ children }: any) {
  return <ol className="text-white text-lg lg:text-xl list-decimal list-inside">{children}</ol>;
}
