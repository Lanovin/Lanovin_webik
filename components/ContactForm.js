"use client";

export function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent("Poptávka z webu Lanovín");
    const body = encodeURIComponent([`Jméno: ${name}`, `Email: ${email}`, "", message].join("\n"));

    window.location.href = `mailto:lanovin.sklepecek@lanovin.cz?subject=${subject}&body=${body}`;
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Jméno a příjmení
        <input type="text" name="name" placeholder="Vaše jméno" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="vas@email.cz" required />
      </label>
      <label>
        Zpráva
        <textarea
          name="message"
          placeholder="Např. termín pobytu nebo zájem o víno"
          rows="4"
          required
        />
      </label>
      <button className="button primary" type="submit">
        Připravit e-mail
      </button>
    </form>
  );
}