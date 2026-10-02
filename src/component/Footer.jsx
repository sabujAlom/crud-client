import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {" "}
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        {" "}
        {/* Main Footer */}{" "}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {" "}
          {/* Logo / About */}{" "}
          <div>
            {" "}
            <h2 className="text-2xl font-bold text-white">
              {" "}
              CRUD<span className="text-blue-500">App</span>{" "}
            </h2>{" "}
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              {" "}
              A simple and modern product management application built with
              Next.js, Express.js and MongoDB mongodb.{" "}
            </p>{" "}
          </div>{" "}
          {/* Quick Links */}{" "}
          <div>
            {" "}
            <h3 className="mb-4 text-lg font-semibold text-white">
              {" "}
              Quick Links{" "}
            </h3>{" "}
            <ul className="space-y-3 text-sm">
              {" "}
              <li>
                {" "}
                <a href="/" className="transition hover:text-blue-400">
                  {" "}
                  Home{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="/products" className="transition hover:text-blue-400">
                  {" "}
                  Products{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="/add-product"
                  className="transition hover:text-blue-400"
                >
                  {" "}
                  Add Product{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Technologies */}{" "}
          <div>
            {" "}
            <h3 className="mb-4 text-lg font-semibold text-white">
              {" "}
              Technologies{" "}
            </h3>{" "}
            <ul className="space-y-3 text-sm text-gray-400">
              {" "}
              <li>Next.js</li> <li>Express.js</li> <li>MongoDB</li>{" "}
              <li>Tailwind CSS</li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Contact */}{" "}
          <div>
            {" "}
            <h3 className="mb-4 text-lg font-semibold text-white">
              {" "}
              Contact{" "}
            </h3>{" "}
            <div className="space-y-3 text-sm text-gray-400">
              {" "}
              <p>Email: sabujalom18@gmail.com</p> <p>Bangladesh</p>{" "}
            </div>{" "}
            {/* Social Links */}{" "}
            <div className="mt-5 flex gap-4">
              {" "}
              <a
                href="#"
                className="rounded-md bg-gray-800 px-3 py-2 text-sm transition hover:bg-blue-600 hover:text-white"
              >
                {" "}
                GitHub{" "}
              </a>{" "}
              <a
                href="#"
                className="rounded-md bg-gray-800 px-3 py-2 text-sm transition hover:bg-blue-600 hover:text-white"
              >
                {" "}
                LinkedIn{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom Section */}{" "}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 text-center sm:flex-row sm:text-left">
          {" "}
          <p className="text-sm text-gray-500">
            {" "}
            © {new Date().getFullYear()} CRUDApp. All rights reserved.{" "}
          </p>{" "}
          <p className="text-sm text-gray-500">
            {" "}
            Built with ❤️ using Next.js{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
};

export default Footer;
