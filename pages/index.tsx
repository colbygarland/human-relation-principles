import Head from 'next/head';

export default function Home() {
  const title = "Dale Carnegie's Human Relation Principles";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="p-16 lg:p-20 bg-gray-900">
        <h1 className="text-green-600 text-5xl mb-16 font-bold">{title}</h1>
        <ListHeader>Fundamental Techniques in Handling People</ListHeader>
        <List>
          <ListItem>Don't Criticize, Condemn or Complain</ListItem>
          <ListItem>Arouse In The Other Person An Eager Want</ListItem>
          <ListItem>Give Honest, Sincere, Appreciation</ListItem>
        </List>
        <ListHeader>Six Ways to Make People Like You</ListHeader>
        <List>
          <ListItem>Become Genuinely Interested In Other People</ListItem>
          <ListItem>Smile</ListItem>
          <ListItem>Remember That A Person's Name Is To That Person The Sweetest And Most Important Sound In Any Language</ListItem>
          <ListItem>Be A Good Listener. Encourage Others To Talk About Themselves</ListItem>
          <ListItem>Talk In Terms Of The Other Person's Interests</ListItem>
          <ListItem>Make The Other Person Feel Important - And Do It Sincerely</ListItem>
        </List>
        <ListHeader>Twelve Ways to Win People to Your Way of Thinking</ListHeader>
        <List>
          <ListItem>The Only Way To Get The Best Of An Argument Is To Avoid It</ListItem>
          <ListItem>Show Respect For The Other Person's Opinion. Never Say, "You're Wrong."</ListItem>
          <ListItem>If You Are Wrong Admit It Quickly And Emphatically</ListItem>
          <ListItem>Begin In A Friendly Manner</ListItem>
          <ListItem>Get The Other Person Saying "Yes, Yes"</ListItem>
          <ListItem>Let The Other Person Do A Great Deal Of The Talking</ListItem>
          <ListItem>Let The Other Person Feel That The Idea Is His Or Hers</ListItem>
          <ListItem>Try Honestly To See Things From The Other Person's Point Of View</ListItem>
          <ListItem>Be Sympathetic With The Other Person's Ideas And Desires</ListItem>
          <ListItem>Appeal To The Nobler Motives</ListItem>
          <ListItem>Dramatize Your Ideas</ListItem>
          <ListItem>Throw Down A Challenge</ListItem>
        </List>
        <ListHeader>Be a Leader: How to Change People Without Giving Offense or Arousing Resentment</ListHeader>
        <List>
          <ListItem>Begin With Praise And Honest Appreciation</ListItem>
          <ListItem>Call Attention To People's Mistakes Indirectly</ListItem>
          <ListItem>Talk About Your Own Mistakes Before Criticizing The Other Person</ListItem>
          <ListItem>Ask Questions Instead Of Giving Direct Orders</ListItem>
          <ListItem>Let The Other Person Save Face</ListItem>
          <ListItem>Praise The Slightest Improvement And Praise Every Improvement. Be "Hearty In Your Approbation And Lavish In Your Praise".</ListItem>
          <ListItem>Give The Other Person A Fine Reputation To Live Up To</ListItem>
          <ListItem>Use Encouragement. Make The Fault Seem Easy To Correct</ListItem>
          <ListItem>Make The Other Person Happy About Doing The Thing You Suggest</ListItem>
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
  return <h3 className="text-green-600 text-2xl font-bold mb-6 mt-10">{children}</h3>;
}

function List({ children }: any) {
  return <ol className="text-white text-xl list-decimal list-inside">{children}</ol>;
}
