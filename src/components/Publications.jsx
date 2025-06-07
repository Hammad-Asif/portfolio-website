import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Comparative Evaluation of Text Similarity Metrics for Enhanced Abstractive Summarization on CNN/DailyMail Corpus",
      journal: "Journal of Computational Biology and Informatics (JCBI)",
      year: "2023",
      type: "Research Paper",
      description: "Investigated and analyzed various text similarity metrics to improve the quality of abstractive summarization on the CNN/DailyMail dataset. The research focused on enhancing the coherence and relevance of generated summaries through advanced similarity measurement techniques.",
      keywords: [
        "Text Similarity Metrics",
        "Abstractive Summarization",
        "Natural Language Processing",
        "CNN/DailyMail Dataset",
        "Deep Learning",
        "Evaluation Metrics"
      ],
      abstract: "This research presents a comprehensive comparative analysis of various text similarity metrics and their impact on abstractive summarization quality. Using the CNN/DailyMail corpus, we evaluated multiple similarity measures including semantic, syntactic, and hybrid approaches to determine their effectiveness in improving summary generation. Our findings demonstrate significant improvements in summary coherence and factual accuracy when incorporating optimized similarity metrics into the summarization pipeline.",
      contributions: [
        "Comprehensive evaluation of text similarity metrics for summarization",
        "Novel approach to integrating similarity measures in abstractive models",
        "Empirical analysis on large-scale CNN/DailyMail dataset",
        "Performance improvements in summary quality and coherence"
      ]
    }
  ];

  return (
    <section id="publications" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">
          Research contributions to the field of Natural Language Processing and Machine Learning
        </p>
        
        <div className="publications-list">
          {publications.map((publication, index) => (
            <div key={index} className="publication-card card">
              <div className="publication-header">
                <div className="publication-icon">
                  <BookOpen size={32} />
                </div>
                <div className="publication-meta">
                  <div className="publication-type">{publication.type}</div>
                  <div className="publication-year">
                    <Calendar size={16} />
                    <span>{publication.year}</span>
                  </div>
                </div>
              </div>
              
              <div className="publication-content">
                <h3 className="publication-title">{publication.title}</h3>
                <div className="publication-journal">
                  <strong>Published in:</strong> {publication.journal}
                </div>
                
                <p className="publication-description">{publication.description}</p>
                
                <div className="publication-abstract">
                  <h4 className="abstract-title">Abstract</h4>
                  <p className="abstract-text">{publication.abstract}</p>
                </div>
                
                <div className="publication-contributions">
                  <h4 className="contributions-title">Key Contributions:</h4>
                  <ul className="contributions-list">
                    {publication.contributions.map((contribution, contribIndex) => (
                      <li key={contribIndex} className="contribution-item">
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="publication-keywords">
                  <h4 className="keywords-title">Keywords:</h4>
                  <div className="keywords-tags">
                    {publication.keywords.map((keyword, keywordIndex) => (
                      <span key={keywordIndex} className="keyword-tag">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
