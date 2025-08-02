'use client';

import { useState } from 'react';

export default function ClientSettingsForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: '',
    description: '',
    allowedTopics: [],
    allowedTopicsCustom: '',
    forbiddenTopics: '',
    tone: 'formal',
    language: 'ru',
    extraNotes: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updated = checked
        ? [...formData.allowedTopics, value]
        : formData.allowedTopics.filter((v) => v !== value);
      setFormData({ ...formData, allowedTopics: updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/client-settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Настройки успешно сохранены!');
    } else {
      alert('Ошибка при сохранении.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-md p-6 rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold mb-4">Анкета подключения SmartBot</h2>

      <div>
        <label className="block mb-1 font-medium">Название компании</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Тип бизнеса</label>
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Выберите тип</option>
          <option value="supermarket">Супермаркет</option>
          <option value="hotel">Отель</option>
          <option value="legal">Юридическая фирма</option>
          <option value="accounting">Бухгалтерия</option>
          <option value="ecommerce">Онлайн-магазин</option>
          <option value="other">Другое</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Описание компании</label>
        <textarea
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">О чём бот может отвечать?</label>
        <div className="space-y-1">
          {['товары', 'цены', 'скидки', 'график', 'услуги'].map((topic) => (
            <div key={topic}>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="allowedTopics"
                  value={topic}
                  onChange={handleChange}
                  checked={formData.allowedTopics.includes(topic)}
                />
                {topic}
              </label>
            </div>
          ))}
        </div>
        <input
          type="text"
          name="allowedTopicsCustom"
          placeholder="Другое..."
          value={formData.allowedTopicsCustom}
          onChange={handleChange}
          className="mt-2 w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">На какие темы бот НЕ должен отвечать?</label>
        <textarea
          name="forbiddenTopics"
          rows={2}
          placeholder="Например: политика, медицина, финансы..."
          value={formData.forbiddenTopics}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Стиль общения</label>
        <select
          name="tone"
          value={formData.tone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="formal">Официальный</option>
          <option value="friendly">Дружелюбный</option>
          <option value="short">Краткий</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Язык общения</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="hy">Հայերեն</option>
          <option value="ru">Русский</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-medium">Дополнительные комментарии</label>
        <textarea
          name="extraNotes"
          rows={3}
          value={formData.extraNotes}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
      >
        Сохранить настройки
      </button>
    </form>
  );
}
