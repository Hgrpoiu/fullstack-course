import React from "react";
import Blog from "../components/Blog";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import BlogForm from "../components/BlogForm";

let container;
const blog = {
  title: "title",
  author: "author",
  url: "url",
  id: 5644989845168,
};

const blogs = [
  {
    title: "title",
    author: "author",
    url: "url",
    id: 5644989845168,
  },
  {
    title: "title2",
    author: "author2",
    url: "url2",
    id: 56449898451648,
  },
  {
    title: "title3",
    author: "author3",
    url: "url3",
    id: 5644989845168234,
  },
];

describe("Basic blog testing", () => {
  beforeEach(() => {
    container = render(<Blog blog={blog} />).container;
  });

  test("Blog is rendered", () => {
    const content = screen.getByText("title by author");

    expect(content).toBeDefined();
  });

  test("Blog show button likes", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("View");

    await user.click(button);

    const div = container.querySelector(".blog");

    expect(div).toHaveTextContent("likes:");
  });

  test("Blog show button url", async () => {
    const user = userEvent.setup();
    const button = screen.getByText("View");

    await user.click(button);

    const div = container.querySelector(`a`);

    expect(div).toHaveTextContent("title"); //Not proper, Search for URL when you learn more!!
  });
});

test("Double click like", async () => {
  const mockHandler = jest.fn();
  container = render(<Blog blog={blog} handleLike={mockHandler} />).container;
  const user = userEvent.setup();
  const viewButton = screen.getByText("View");

  await user.click(viewButton);
  const likeButton = screen.getByText("Like");
  await user.click(likeButton);
  await user.click(likeButton);

  expect(mockHandler.mock.calls).toHaveLength(2);
});

test("Creating a new blog from form", async () => {
  const mockHandler = jest.fn();
  container = render(
    <BlogForm postBlogHandler={mockHandler} blogs={blogs} />
  ).container;

  const user = userEvent.setup();

  const viewButton = screen.getAllByText("Create a blog");
  await user.click(viewButton[1]); //h2 is labeled the same!!

  const div = container.querySelector(".togglableContent");
  expect(div).not.toHaveStyle("display: none");

  const forms = screen.getAllByPlaceholderText("Write ", { exact: false });
  const submit = screen.getByText("Submit")

  await user.type(forms[0], "title");
  await user.type(forms[1], "author");
  await user.type(forms[2], "url");
  await user.click(submit);

  expect(mockHandler.mock.calls[0][0]).toBe("title");
  expect(mockHandler.mock.calls[0][1]).toBe("author");
  expect(mockHandler.mock.calls[0][2]).toBe("url");
})
