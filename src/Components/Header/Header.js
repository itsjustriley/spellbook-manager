import React from 'react';

function Header() {
  return (
    <header className="bg-light-purple flex justify-between items-center p-10 mb-10 sticky top-0">
      <div className="flex items-center">
        <img className="mr-4" src="icons8-magic-book-60.png" alt="Magic Wand Icon" />
        <h1 className="text-xl text-purple font-bold">Spellbook Manager</h1>
      </div>
      <ul className="flex pr-10 text-medium-purple">
        <li className="mr-10">
          <a className={`hover:text-white`} href="/spellbook-manager">Prepared Spells</a>
        </li>
        <li className="mr-10">
          <a className="hover:text-white" href="/spellbook-manager#known">Spells Known</a>
        </li>
        <li>
          <a className="hover:text-white" href="/spellbook-manager#search">Spell Search</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;