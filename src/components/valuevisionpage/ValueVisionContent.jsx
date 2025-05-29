// 

import React from 'react';
import '../../styles/ValueVisionContent.css';
import fig1PriceHist from '../../assets/images/valuevision/fig1-price-hist.png';
import fig2Shap from '../../assets/images/valuevision/fig2-shap.png';
import fig3TsneText from '../../assets/images/valuevision/fig3-tsne-text.png';
import fig7Framework from '../../assets/images/valuevision/fig7-framework.png';
import fig8TextEmbeddingPipeline from '../../assets/images/valuevision/fig8-text-embedding-pipeline.png';
import fig9Mae from '../../assets/images/valuevision/fig9-mae.png';

const ValueVisionContent = () => {
  return (
    <div className="valuevision-content">
      {/* PROJECT OVERVIEW */}
      <section className="section">
        <div className="section-label">PROJECT OVERVIEW</div>
        
        <div className="section-content">
          <div className="grid-row grid-2-col">
            <div className="grid-item">
              <h3 className="content-title">Opportunity</h3>
              <p className="content-text">
                Pair tabular attributes with listing descriptions and photos&nbsp;to
                mimic how buyers <em>see</em>&nbsp;value.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="content-title">Challenge</h3>
              <p className="content-text">
                Beat single-modality baselines despite boiler-plate text, missing photos,
                and heavily skewed prices.
              </p>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className="grid-row grid-4-col">
            <div className="grid-item">
              <h3 className="content-title">Timeline</h3>
              <p className="content-text">Mar 2023 – May 2024</p>
            </div>
            <div className="grid-item">
              <h3 className="content-title">Disciplines</h3>
              <p className="content-text">
                Machine Learning<br />
                Data Engineering<br />
                Visualization
              </p>
            </div>
            <div className="grid-item">
              <h3 className="content-title">Responsibilities</h3>
              <p className="content-text">
                Data ingestion &amp; cleaning<br />
                Feature engineering<br />
                Model training &amp; evaluation<br />
                Result reporting
              </p>
            </div>
            <div className="grid-item">
              <h3 className="content-title">Tools</h3>
              <p className="content-text">
                Python · scikit-learn · PyTorch<br />
                LightGBM · XGBoost<br />
                DistilBERT · ResNet-18<br />
                Truncated SVD · SHAP<br />
                Weights &amp; Biases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="section">
        <h2 className="section-title">Background</h2>
        
        <div className="section-content">
          <p className="content-text">
            Automated Valuation Models usually stop at "beds, baths, square-footage." 
            Yet buyers care about curb appeal, staging, and story. Our hypothesis: a
            model that <em>reads</em> descriptions and <em>sees</em> images—alongside raw
            numbers—will better capture that intuition and lower error.
          </p>
        </div>
      </section>

      {/* LITERATURE FOUNDATIONS */}
      <section className="section">
        <h2 className="section-title">Literature Foundations</h2>
        
        <div className="section-content">
          <div className="table-container">
            <div className="table-header">
              <div className="table-cell">Modality</div>
              <div className="table-cell">Key Paper</div>
              <div className="table-cell">Take-away</div>
              <div className="table-cell">How we extended it</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Text</div>
              <div className="table-cell"><em>Title2Price</em> (2023)</div>
              <div className="table-cell">BERT fine-tuning ↓ MAE 5.6%</div>
              <div className="table-cell">Fine-tuned DistilBERT on full 256-token descriptions.</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Images</div>
              <div className="table-cell">MHPP (2024)</div>
              <div className="table-cell">CLIP alignment ↓ MAE 26%</div>
              <div className="table-cell">Decoupled image &amp; text encoders to isolate lift.</div>
            </div>

            <div className="table-row">
              <div className="table-cell">Structured</div>
              <div className="table-cell">Babb (2019)</div>
              <div className="table-cell">Gradient Boost &gt; linear on tabular data.</div>
              <div className="table-cell">Used LightGBM + χ² + RFE on 1,800 flags.</div>
            </div>

            <div className="table-row table-note">
              <div className="table-cell-full">
                (A geospatial arm was planned but dropped after API throttling.)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATASET & PRE-PROCESSING */}
      <section className="section">
        <h2 className="section-title">Dataset &amp; Pre-processing</h2>
        
        <div className="section-content">
          <ul className="feature-list">
            <li><strong>52,851</strong> Melbourne sales (2013-2015)</li>
            <li><strong>1,800+</strong> binary flags (pool, fireplace, …)</li>
            <li><strong>≈ 250k</strong> image URLs (≈ 5 per listing)</li>
            <li><strong>200 MB</strong> cleaned text</li>
          </ul>
        </div>

        <h3 className="content-title">Key steps</h3>
        <div className="section-content">
          <ol className="process-list">
            <li>
              <strong>Outlier trim —</strong> removed top 1% (&gt; $5M) ➜ smoother
              log-price distribution.
              <div className="figure">
                <img
                  src={fig1PriceHist}
                  alt="Price distribution before and after trimming"
                  className="figure-image"
                />
              </div>
            </li>
            <li><strong>Tabular cleanup —</strong> one-hot, z-score, χ² drop of near-zero-importance columns.</li>
            <li><strong>Image rescue —</strong> parallel HTTP; on 404 we duplicated an existing photo.</li>
            <li><strong>Experiment tracking —</strong> 73 runs logged in Weights &amp; Biases.</li>
          </ol>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="section">
        <h2 className="section-title">Methodology</h2>
        
        <div className="section-content">
          <div className="methodology-block">
            <h3 className="content-subtitle">A · Structured Baseline</h3>
            <p className="content-text">
              We trained a <strong>LightGBM</strong> model (depth&nbsp;7, 300 trees) on the raw&nbsp;+ engineered
              1,800 tabular features.<br />
              <strong>MAE 203,843 · RMSE 292,558</strong><br />
              SHAP highlights bedrooms, bathrooms, and parking as the most influential predictors.
            </p>
            <div className="figure">
              <img src={fig2Shap} alt="SHAP feature importance" className="figure-image" />
              <figcaption className="figure-caption">Figure 2 – SHAP feature importance.</figcaption>
            </div>
          </div>

          <div className="methodology-block">
            <h3 className="content-subtitle">B · Text Embedding</h3>
            <p className="content-text">
              DistilBERT ➜ 768-D sentence embeddings ➜ regression head
              (learning-rate&nbsp;2e-5, 3 epochs).  
              Stand-alone <strong>MAE ≈ 300k</strong>&nbsp;(descriptions are often boiler-plate).
              A t-SNE projection shows weak structure.
            </p>
            <div className="figure">
              <img src={fig8TextEmbeddingPipeline} alt="Text embedding sub-pipeline" className="figure-image" />
              <figcaption className="figure-caption">Figure 5 – Text embedding sub-pipeline.</figcaption>
            </div>
            <div className="figure">
              <img src={fig3TsneText} alt="t-SNE of BERT embeddings" className="figure-image" />
              <figcaption className="figure-caption">Figure 3 – t-SNE of text embeddings (no obvious price clusters).</figcaption>
            </div>
          </div>

          <div className="methodology-block">
            <h3 className="content-subtitle">C · Image Embedding</h3>
            <p className="content-text">
              We froze a ResNet-18 convolutional base and extracted 512-D global-average-pool
              vectors.<br />
              <strong>50k</strong>&nbsp;images processed in 4h on a Colab T4 (batch&nbsp;128).<br />
              Stand-alone <strong>MAE ≈ 280k</strong>—better than text, still worse than tabular.
            </p>
          </div>

          <div className="methodology-block">
            <h3 className="content-subtitle">D · Multimodal Fusion</h3>
            <p className="content-text">
              We reduced each modality with <strong>Truncated SVD&nbsp;(20 components)</strong>:<br />
              <code>20&nbsp;tabular&nbsp;+ 20 text&nbsp;+ 20 image = 60-D</code> fused vector.<br />
              A downstream LightGBM (depth 7, 350 trees) learned on this stack.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section">
        <h2 className="section-title">Results</h2>
        
        <div className="section-content">
          <div className="results-table">
            <table>
              <thead>
                <tr>
                  <th>Configuration</th>
                  <th>MAE</th>
                  <th>RMSE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Structured only</td>
                  <td>203,843</td>
                  <td>292,558</td>
                </tr>
                <tr>
                  <td>+ Feature engineering</td>
                  <td>199,742</td>
                  <td>286,332</td>
                </tr>
                <tr>
                  <td>+ Text</td>
                  <td>200,261</td>
                  <td>287,149</td>
                </tr>
                <tr>
                  <td>+ Image</td>
                  <td>200,220</td>
                  <td>287,270</td>
                </tr>
                <tr className="highlight-row">
                  <td><strong>Multimodal&nbsp;(60-D)</strong></td>
                  <td><strong>200,264</strong></td>
                  <td><strong>287,368</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="figure">
            <img
              src={fig7Framework}
              alt="End-to-end multimodal pipeline"
              className="figure-image"
            />
            <figcaption className="figure-caption">Figure&nbsp;4 – End-to-end multimodal pipeline.</figcaption>
          </div>

          <div className="figure">
            <img
              src={fig9Mae}
              alt="MAE across models and modality combinations"
              className="figure-image"
            />
            <figcaption className="figure-caption">
              Figure&nbsp;6 – MAE across models &amp; modality combos.
            </figcaption>
          </div>
        </div>
      </section>

      {/* EVALUATION METRICS */}
      <section className="section">
        <h2 className="section-title">Evaluation Metrics</h2>
        
        <div className="section-content">
          <p className="content-text">
            After training we invert log-prices back to dollars before scoring.  
            The formulas we apply are:
          </p>

          <div className="code-block">
            <pre>
{`MAE  = (1/N) Σ | exp(z_i) - 1  –  (exp(ẑ_i) - 1) |
RMSE = √[(1/N) Σ (exp(z_i) - 1  –  (exp(ẑ_i) - 1))²]`}
            </pre>
            <p className="code-caption">
              where <em>z<sub>i</sub></em> is the log-true price and <em>ẑ<sub>i</sub></em> the log-predicted price.
              (Matches Figure 7 in the final report.)
            </p>
          </div>
        </div>
      </section>

      {/* WHAT DIDN'T MATCH */}
      <section className="section">
        <h2 className="section-title">What Didn't Match the Hypothesis</h2>
        
        <div className="section-content">
          <div className="table-container">
            <div className="table-header">
              <div className="table-cell">Expectation</div>
              <div className="table-cell">Reality</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Text modality would cut&nbsp;MAE ≥ 5%</div>
              <div className="table-cell">Only 0.3% – realtor clichés add little signal.</div>
            </div>
            <div className="table-row">
              <div className="table-cell">ResNet captures an "aesthetic premium"</div>
              <div className="table-cell">Pre-trained weights see sofas &amp; walls; domain fine-tuning needed.</div>
            </div>
            <div className="table-row">
              <div className="table-cell">Stacking weak modalities compounds gains</div>
              <div className="table-cell">Diminishing returns – final MAE drop ≈ $3.6k (&lt; 2%).</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS HIGHLIGHTS */}
      <section className="section">
        <h2 className="section-title">Process Highlights</h2>
        
        <div className="section-content">
          <ul className="feature-list">
            <li>Parallel scraper trimmed image ingest from <strong>16h → 4h</strong>.</li>
            <li>χ² + RFE pruned <strong>94%</strong> of sparse binary flags.</li>
            <li>Truncated SVD (20 components / stream) kept the fused vector to <strong>60 dims</strong> while retaining ~92% variance.</li>
            <li>Each training run auto-generates a PDF (metrics, residual plots).</li>
          </ul>
        </div>
      </section>

      {/* OUTPUTS */}
      <section className="section">
        <h2 className="section-title">Outputs</h2>
        
        <div className="section-content">
          <p className="content-text"><strong>Reproducible repo:</strong></p>
          <div className="code-block">
            <pre>
{`git clone https://github.com/diyagangwar1/ValueVision_ML.git
pip install -e .
python train.py --config multimodal.yaml`}
            </pre>
          </div>
          <p className="content-text">
            • Jupyter demo – interactive SHAP, MAE curves, residual maps.<br />
            • Slide deck &amp; 10-page final report (CS 158 submission).
          </p>
        </div>
      </section>

      {/* REFLECTION & LESSONS */}
      <section className="section">
        <h2 className="section-title">Reflection &amp; Lessons</h2>
        
        <div className="section-content">
          <ul className="feature-list">
            <li><strong>Multimodal ≠ magic —</strong> data quality trumps stream count.</li>
            <li><strong>Domain adaptation —</strong> CNNs must learn <em>housing</em> aesthetics, not ImageNet cats &amp; dogs.</li>
            <li><strong>Feature thrift —</strong> 1,300+ raw dims → <strong>60</strong> with negligible loss thanks to SVD.</li>
          </ul>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="section">
        <h2 className="section-title">Next Steps</h2>
        
        <div className="section-content">
          <ul className="feature-list">
            <li>Fine-tune ResNet end-to-end on price-bin regression.</li>
            <li>Replace DistilBERT with SBERT-NLI for richer sentence pooling.</li>
            <li>Re-introduce graph-based neighborhood embeddings once API quotas stabilize.</li>
            <li>Deploy a Flask API + lightweight LightGBM model for live demos.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ValueVisionContent;
