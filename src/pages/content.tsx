import React, { useContext } from 'react';

// import PlaceHolderArticle from '../components/PlaceHolder/Article';

import style from '@styles/content.css';

interface IContentProps {}

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
          <div className={style.clearfix}>
            <div style={{ float: 'left' }}>
              <img
                src="https://cdn2.ettoday.net/images/1083/d1083997.jpg"
                alt="cover"
                style={{ height: 300, width: 500 }}
              />
            </div>
            <p>
              Someday, sam and his families go to the park, Someday, sam and his families go to the
              parkSomeday, sam and his families go to the parkSomeday, sam and his families go to
              the park...
            </p>
            <p>
              Someday, sam and his families go to the park, Someday, sam and his families go to the
              parkSomeday, sam and his families go to the parkSomeday, sam and his families go to
              the park...
            </p>

            {/* <div style={{ clear: 'both' }}></div> */}
          </div>

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
