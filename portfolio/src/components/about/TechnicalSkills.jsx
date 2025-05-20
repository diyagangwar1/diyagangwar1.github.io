import React, { useState, useEffect } from 'react';
import '../../styles/TechnicalSkills.css';

// Import all available images for skills
import python from '../../assets/images/skills/python.png';
import cpp from '../../assets/images/skills/c++.png';
import java from '../../assets/images/skills/java.png';
import r from '../../assets/images/skills/r.png';
import mysql from '../../assets/images/skills/mysql.png';
import mysql_alt from '../../assets/images/skills/MySQL.png';
import javascript from '../../assets/images/skills/javascript.webp';
import c from '../../assets/images/skills/c.jpeg';
import html from '../../assets/images/skills/HTML.png';
import html_css from '../../assets/images/skills/html_css.png';
import bash from '../../assets/images/skills/bash.png';
import pytorch from '../../assets/images/skills/pytorch.png';
import huggingface from '../../assets/images/skills/huggingface.png';
import scikit_learn from '../../assets/images/skills/Scikit_learn.png';
import xgboost from '../../assets/images/skills/xgboost.png';
import sbert from '../../assets/images/skills/sbert.png';
import sbert_cnn from '../../assets/images/skills/sbert_cnn.png';
import react from '../../assets/images/skills/react.png';
import expressjs from '../../assets/images/skills/express-js.webp';
import express_js from '../../assets/images/skills/express_js.png';
import rest_api from '../../assets/images/skills/rest_api.png';
import pandas from '../../assets/images/skills/pandas.png';
import numpy from '../../assets/images/skills/numpy.png';
import matplotlib from '../../assets/images/skills/matplotlib.png';
import notion from '../../assets/images/skills/Notion.png';
import google_sheets from '../../assets/images/skills/google-sheets.avif';
import zapier from '../../assets/images/skills/Zapier Logo.svg';
import figma from '../../assets/images/skills/figma.png';
import random_forest from '../../assets/images/skills/random_forest.png';
import ridge from '../../assets/images/skills/ridge.png';
import qdrant from '../../assets/images/skills/Qdrant Logo.jpg';
import openai_api from '../../assets/images/skills/openai_api.png';
import llama_cpp from '../../assets/images/skills/llama_cpp.png';
import llama_cpp_svg from '../../assets/images/skills/llama_cpp.svg';
import mistral_ai from '../../assets/images/skills/mistral_ai.png';
import azure from '../../assets/images/skills/azure.jpg';
import docker from '../../assets/images/skills/docker.webp';
import git from '../../assets/images/skills/Git.png';
import git_jpeg from '../../assets/images/skills/git.jpeg';
import linux from '../../assets/images/skills/linux.png';
import mongodb from '../../assets/images/skills/mongodb.png';
import esp32 from '../../assets/images/skills/esp32.png';
import esp32_s3 from '../../assets/images/skills/esp32_s3.jpg';
import esp32_s3_webp from '../../assets/images/skills/esp32_s3.webp';
import esp_idf from '../../assets/images/skills/esp-idf.webp';
import tinyml from '../../assets/images/skills/tinyML.png';

const skillImages = {
  python,
  'c++': cpp,
  java,
  r,
  mysql,
  'sql (mysql)': mysql,
  mysql_alt,
  javascript,
  c,
  html,
  'html/css': html_css,
  bash,
  pytorch,
  'hugging face': huggingface,
  'scikit-learn': scikit_learn,
  xgboost,
  sbert,
  'sbert + cnn': sbert_cnn,
  react,
  'react (basic)': react,
  'express.js (basic)': expressjs,
  'express js': express_js,
  'rest apis': rest_api,
  pandas,
  numpy,
  matplotlib,
  'notion api': notion,
  'google sheets api': google_sheets,
  zapier,
  figma,
  'random forest': random_forest,
  ridge,
  qdrant,
  'openai api': openai_api,
  'llama.cpp': llama_cpp,
  'llama_cpp': llama_cpp_svg,
  'mistral ai': mistral_ai,
  'azure ml': azure,
  docker,
  'git & github': git,
  git_jpeg,
  'linux cli': linux,
  mongodb,
  esp32,
  'esp32-s3': esp32_s3,
  'esp32_s3': esp32_s3_webp,
  'esp-idf': esp_idf,
  'tinyml on esp32-s3': tinyml,
};

const categories = {
  Languages: [
    'Python', 'C++', 'Java', 'R', 'SQL (MySQL)', 'JavaScript', 'C', 'HTML/CSS', 'Bash',
  ],
  'Frameworks / Libraries': [
    'PyTorch', 'Hugging Face','OpenAI API', 'LLaMa.cpp', 'Mistral AI', 'Qdrant',
    'scikit-learn', 'XGBoost', 'SBERT', 'REST APIs',
    'Pandas', 'NumPy', 'Matplotlib', 'Notion API', 'Google Sheets API', 
  ],
  'Embedded / Hardware': [
    'ESP32-S3', 'ESP-IDF', 'Embedded C++', 'ADC Monitoring', 
    'Intermittent Computing', 'PCB Design',
  ],
  'Cloud / DevOps': [
    'Azure ML', 'Docker', 'Git & GitHub', 'Linux CLI', 'MongoDB',
  ],
  'Human-Centered / UX Design': [
    'React', 'Express.js (basic)', 'Zapier', 'Figma',
    'Empathy Mapping', 'User Flow Prototyping', 'Accessibility-First AI', 
    'Ethical AI', 'Iterative Testing', 'Low-Fidelity Prototypes',
  ],
  Concepts: [
    'Intermittent Computing', 'Embedded ML', 'Multimodal Fusion', 
    'NLP Pipelines', 'Energy-Aware Scheduling', 'Secure Systems Design',
    'Trustworthy AI', 'Systems Thinking', 'Rapid Iteration',
  ],
};

const getSkillImage = (skill) => {
  // Normalize skill name for matching
  let key = skill.trim().toLowerCase().replace(/\s*\(.*?\)|[^a-z0-9+]+/g, ' ').replace(/\s+/g, ' ').trim();
  // Try direct match
  if (skillImages[key]) return skillImages[key];
  // Try with underscores
  key = key.replace(/\s+/g, '_');
  if (skillImages[key]) return skillImages[key];
  // Try with dashes
  key = key.replace(/_/g, '-');
  if (skillImages[key]) return skillImages[key];
  // Try with no spaces
  key = key.replace(/-/g, '');
  if (skillImages[key]) return skillImages[key];
  return null;
};

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState('Languages');
  const [animatedIndexes, setAnimatedIndexes] = useState([]);

  useEffect(() => {
    setAnimatedIndexes([]);
    const skillsCount = categories[activeTab].length;
    let timeouts = [];
    for (let i = 0; i < skillsCount; i++) {
      timeouts.push(
        setTimeout(() => {
          setAnimatedIndexes(prev => [...prev, i]);
        }, 200 + i * 120)
      );
    }
    return () => timeouts.forEach(t => clearTimeout(t));
  }, [activeTab]);

  return (
    <div className="techskills">
      <h2 className="techskills_title">Technical Skills</h2>
      <p className="techskills_subtitle">My expertise across various technologies and tools</p>

      <div className="tabs">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`tab_button ${activeTab === category ? 'active' : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills_box">
        <div className="skills_grid">
          {categories[activeTab].map((skill, i) => {
            const img = getSkillImage(skill);
            return (
              <div
                key={i}
                className={`skill_card${animatedIndexes.includes(i) ? ' animated' : ''}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {img ? (
                  <img src={img} alt={skill} style={{ width: 20, height: 20, marginRight: 8, verticalAlign: 'middle', objectFit: 'contain', borderRadius: 2 }} />
                ) : null}
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
