import React from "react";

export default function Home() {
  return (
    <div>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit={(e) => e.preventDefault()}
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <div>
          <label>
            Name <br />
            <input type="text" name="full-name" required />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email<br />
            <input id="email" type="email" name="email" required />
          </label>
        </div>
        <div>
          <label>
            Message <br />
            <textarea name="comments"></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
}
