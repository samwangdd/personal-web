import React, { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(
    () => {
      document.title = title;
      return () => (document.title = "前端精读");
    },
    [title]
  );
}

export default useDocumentTitle;