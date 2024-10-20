import { useAtom } from 'jotai';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { NAVIGATION_CONTENTS } from '@/layout/Navigation/constants';
import { currentUserAtom } from '@/store/authAtoms';

type TNavigation = {
  path: string;
  content: string;
  children?: {
    childPath: string;
    childContent: string;
  }[];
};

export default function Navigation() {
  const [{ data }] = useAtom(currentUserAtom);
  const { pathname } = useLocation();
  const currentPath = pathname.split('/')[1];

  return (
    <>
      {data && (
        <Fragment>
          <nav className="flex mt-2 px-5 border-b border-slate-200">
            {NAVIGATION_CONTENTS[String(data.role)].map(({ path, content }: TNavigation) => (
              <Fragment key={path}>
                <Link
                  to={path}
                  className={`py-4 grow flex items-center justify-center hover:cursor-pointer hover:bg-slate-200 
              ${path === `/${currentPath}` ? 'text-purple-50 border-b border-purple-50' : ''}`}
                >
                  <li className="list-none">{content}</li>
                </Link>
              </Fragment>
            ))}
          </nav>
          {NAVIGATION_CONTENTS[String(data.role)]?.map(({ path, children }: TNavigation) => (
            <Fragment key={path}>
              {children && (
                <div key={path} className="pl-6 gap-4 flex bg-slate-200 left-0 w-full">
                  {children?.map(({ childPath, childContent }) => (
                    <Fragment key={childPath}>
                      {path === `/${currentPath}` && (
                        <Link
                          to={childPath}
                          className={`py-3 text-xs flex items-center justify-center
                ${childPath === pathname ? 'text-purple-50' : ''}`}
                        >
                          <li
                            className={`list-none ${childPath === pathname ? 'border-b border-purple-50' : ''}`}
                          >
                            {childContent}
                          </li>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </Fragment>
      )}
    </>
  );
}
