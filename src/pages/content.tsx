import React, { useContext } from 'react';

// import PlaceHolderArticle from '../components/PlaceHolder/Article';

import style from '@styles/content.css';

interface IContentProps {}

interface IACProps {
  [propName: string]: any;
}

const AppContext: any = React.createContext({});

const NavBar = () => {
  const { userName } = useContext(AppContext);

  return <p>{userName}</p>;
};

const Content: React.SFC<IContentProps> = () => {
  return (
    <AppContext.Provider value={{ userName: 'sam' }}>
      <div className={style.hello}>
        <NavBar />
        {/* <PlaceHolderArticle /> */}
        <header>This is the headers</header>
        <div>
          <main>
            <h1>This is the main content.</h1>
            <p>
              Someday, sam and his families go to the park, Someday, sam and his families go to the
              parkSomeday, sam and his families go to the parkSomeday, sam and his families go to
              the park...
            </p>
          </main>
          <nav>
            <h4>This is the navigation section.</h4>
            <p>
              Someday, sam and his families go to the park, Someday, sam and his families go to the
              parkSomeday, sam and his families go to the park...
            </p>
          </nav>
          <aside>
            <h4>This is an aside section.</h4>
            <p>
              Someday, sam and his families go to the park, Someday, sam and his families go to the
              parkSomeday, sam and his families go to the park...
            </p>
          </aside>
        </div>
        <footer>This is the footer.</footer>
      </div>
    </AppContext.Provider>
  );
};

export default Content;
