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
    <div className="valuevision-content-container">
      {/* ========= PROJECT OVERVIEW ========= */}
      <div className="processhighlights">PROJECT OVERVIEW</div>
      <div className="section-divider"></div>

      {/* ---- Row 1 : Opportunity | Challenge ---- */}
      <div className="table first-row">
        <div className="row two-cols">
          <div className="column">
            <div className="section-title">Opportunity</div>
            <div className="section-content">
              Pair tabular attributes with listing descriptions and photos&nbsp;to
              mimic how buyers <em>see</em>&nbsp;value.
            </div>
          </div>
          <div className="column">
            <div className="section-title">Challenge</div>
            <div className="section-content">
              Beat single-modality baselines despite boiler-plate text, missing photos,
              and heavily skewed prices.
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>

      {/* ---- Row 2 : Timeline | Disciplines | Responsibilities | Tools ---- */}
      <div className="table second-row">
        <div className="row four-cols">
          <div className="column">
            <div className="section-title">Timeline</div>
            <div className="section-content">Mar 2023 – May 2024</div>
          </div>
          <div className="column">
            <div className="section-title">Disciplines</div>
            <div className="section-content">
              Machine Learning<br />Data Engineering<br />Visualization
            </div>
          </div>
          <div className="column">
            <div className="section-title">Responsibilities</div>
            <div className="section-content">
              Data ingestion &amp; cleaning<br />
              Feature engineering<br />
              Model training &amp; evaluation<br />
              Result reporting
            </div>
          </div>
          <div className="column">
            <div className="section-title">Tools</div>
            <div className="section-content">
              Python · scikit-learn · PyTorch<br />
              LightGBM · XGBoost<br />
              DistilBERT · ResNet-18<br />
              Truncated SVD · SHAP<br />
              Weights &amp; Biases
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>

      {/* ===== BACKGROUND ===== */}
      <div className="section-title" style={{marginTop: '2.5rem'}}>Background</div>
      <div className="section-content" style={{marginBottom: '1.5rem'}}>
        Automated Valuation Models usually stop at "beds, baths, square-footage." 
        Yet buyers care about curb appeal, staging, and story. Our hypothesis: a
        model that <em>reads</em> descriptions and <em>sees</em> images—alongside raw
        numbers—will better capture that intuition and lower error.
      </div>
      <div className="section-divider"></div>

      {/* ===== LITERATURE FOUNDATIONS ===== */}
      <div className="section-title">Literature Foundations</div>
      <div className="lit-table">
        <div className="lit-row lit-header">
          <span>Modality</span>
          <span>Key Paper</span>
          <span>Take-away</span>
          <span>How we extended it</span>
        </div>

        <div className="lit-row">
          <span>Text</span>
          <span><em>Title2Price</em> (2023)</span>
          <span>BERT fine-tuning ↓ MAE 5.6%</span>
          <span>Fine-tuned DistilBERT on full 256-token descriptions.</span>
        </div>

        <div className="lit-row">
          <span>Images</span>
          <span>MHPP (2024)</span>
          <span>CLIP alignment ↓ MAE 26%</span>
          <span>Decoupled image &amp; text encoders to isolate lift.</span>
        </div>

        <div className="lit-row">
          <span>Structured</span>
          <span>Babb (2019)</span>
          <span>Gradient Boost &gt; linear on tabular data.</span>
          <span>Used LightGBM + χ² + RFE on 1,800 flags.</span>
        </div>

        <div className="lit-row lit-note">
          <span colSpan={4}>
            (A geospatial arm was planned but dropped after API throttling.)
          </span>
        </div>
      </div>
      <div className="section-divider"></div>

      {/* ===== DATASET & PRE-PROCESSING ===== */}
      <div className="section-title">Dataset &amp; Pre-processing</div>
      <ul className="bullet-list">
        <li><strong>52,851</strong> Melbourne sales (2013-2015)</li>
        <li><strong>1,800+</strong> binary flags (pool, fireplace, …)</li>
        <li><strong>≈ 250k</strong> image URLs (≈ 5 per listing)</li>
        <li><strong>200 MB</strong> cleaned text</li>
      </ul>
      <div className="section-title" style={{marginTop: '1.5rem'}}>Key steps</div>
      <ol className="numbered-list">
        <li>
          <strong>Outlier trim —</strong> removed top 1% (&gt; $5M) ➜ smoother
          log-price distribution.<br />
          <img
            src={fig1PriceHist}
            alt="Price distribution before and after trimming"
            className="process-img"
          />
        </li>
        <li><strong>Tabular cleanup —</strong> one-hot, z-score, χ² drop of near-zero-importance columns.</li>
        <li><strong>Image rescue —</strong> parallel HTTP; on 404 we duplicated an existing photo.</li>
        <li><strong>Experiment tracking —</strong> 73 runs logged in Weights &amp; Biases.</li>
      </ol>
      <div className="section-divider"></div>

      {/* ===== METHODOLOGY ===== */}
      <div className="section-title">Methodology</div>
      <div className="sub-heading">A · Structured Baseline</div>
      <div className="section-content">
        We trained a <strong>LightGBM</strong> model (depth&nbsp;7, 300 trees) on the raw&nbsp;+ engineered
        1,800 tabular features.<br />
        <strong>MAE 203,843 · RMSE 292,558</strong><br />
        SHAP highlights bedrooms, bathrooms, and parking as the most influential predictors.
      </div>
      <div className="figure-block">
        <img src={fig2Shap} alt="SHAP feature importance" className="process-img" />
        <em className="fig-caption">Figure 2 – SHAP feature importance.</em>
      </div>
      <div className="sub-heading">B · Text Embedding</div>
      <div className="section-content">
        DistilBERT ➜ 768-D sentence embeddings ➜ regression head
        (learning-rate&nbsp;2e-5, 3 epochs).  
        Stand-alone <strong>MAE ≈ 300k</strong>&nbsp;(descriptions are often boiler-plate).
        A t-SNE projection shows weak structure.
      </div>
      <div className="figure-block">
        <img src={fig8TextEmbeddingPipeline} alt="Text embedding sub-pipeline" className="process-img" />
        <em className="fig-caption">Figure 5 – Text embedding sub-pipeline.</em>
      </div>
      <div className="figure-block">
        <img src={fig3TsneText} alt="t-SNE of BERT embeddings" className="process-img" />
        <em className="fig-caption">Figure 3 – t-SNE of text embeddings (no obvious price clusters).</em>
      </div>
      <div className="sub-heading">C · Image Embedding</div>
      <div className="section-content">
        We froze a ResNet-18 convolutional base and extracted 512-D global-average-pool
        vectors.<br />
        <strong>50k</strong>&nbsp;images processed in 4h on a Colab T4 (batch&nbsp;128).<br />
        Stand-alone <strong>MAE ≈ 280k</strong>—better than text, still worse than tabular.
      </div>
      <div className="sub-heading">D · Multimodal Fusion</div>
      <div className="section-content">
        We reduced each modality with <strong>Truncated SVD&nbsp;(20 components)</strong>:<br />
        <code>20&nbsp;tabular&nbsp;+ 20 text&nbsp;+ 20 image = 60-D</code> fused vector.<br />
        A downstream LightGBM (depth 7, 350 trees) learned on this stack.
      </div>
      <div className="section-divider"></div>

      {/* --- Results table --- */}
      <div className="metric-table">
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
      <div className="section-divider"></div>

      {/* --- Figures for pipeline / MAE chart --- */}
      <div className="figure-block">
        <img
          src={fig7Framework}
          alt="End-to-end multimodal pipeline"
          className="process-img"
        />
        <em className="fig-caption">Figure&nbsp;4 – End-to-end multimodal pipeline.</em>
      </div>
      <div className="section-divider"></div>

      <div className="figure-block">
        <img
          src={fig9Mae}
          alt="MAE across models and modality combinations"
          className="process-img"
        />
        <em className="fig-caption">
          Figure&nbsp;6 – MAE across models &amp; modality combos.
        </em>
      </div>
      <div className="section-divider"></div>

      {/* ========= 5 · EVALUATION METRICS ========= */}
      <div className="section-title">Evaluation Metrics</div>
      <div className="section-content">
        After training we invert log-prices back to dollars before scoring.  
        The formulas we apply are:
      </div>
      <div className="section-divider"></div>

      {/* — Formula block — */}
      <pre className="formula-block">
{`MAE  = (1/N) Σ | exp(z_i) - 1  –  (exp(ẑ_i) - 1) |
RMSE = √[(1/N) Σ (exp(z_i) - 1  –  (exp(ẑ_i) - 1))²]`}
      </pre>
      <div className="section-content formula-caption">
        where <em>z<sub>i</sub></em> is the log-true price and <em>ẑ<sub>i</sub></em> the log-predicted price.
        (Matches Figure 7 in the final report.)
      </div>
      <div className="section-divider"></div>

      {/* ========= 6 · WHAT DIDN'T MATCH ========= */}
      <div className="section-title">What Didn't Match the Hypothesis</div>
      <div className="lit-table">
        <div className="lit-row lit-header">
          <span>Expectation</span>
          <span>Reality</span>
        </div>
        <div className="lit-row">
          <span>Text modality would cut&nbsp;MAE ≥ 5%</span>
          <span>Only 0.3% – realtor clichés add little signal.</span>
        </div>
        <div className="lit-row">
          <span>ResNet captures an "aesthetic premium"</span>
          <span>Pre-trained weights see sofas &amp; walls; domain fine-tuning needed.</span>
        </div>
        <div className="lit-row">
          <span>Stacking weak modalities compounds gains</span>
          <span>Diminishing returns – final MAE drop ≈ $3.6k (&lt; 2%).</span>
        </div>
      </div>
      <div className="section-divider"></div>

      {/* ========= 7 · PROCESS HIGHLIGHTS ========= */}
      <div className="section-title">Process Highlights</div>
      <ul className="bullet-list">
        <li>Parallel scraper trimmed image ingest from <strong>16h → 4h</strong>.</li>
        <li>χ² + RFE pruned <strong>94%</strong> of sparse binary flags.</li>
        <li>Truncated SVD (20 components / stream) kept the fused vector to <strong>60 dims</strong> while retaining ~92% variance.</li>
        <li>Each training run auto-generates a PDF (metrics, residual plots).</li>
      </ul>
      <div className="section-divider"></div>

      {/* ========= 8 · OUTPUTS ========= */}
      <div className="section-title">Outputs</div>
      <div className="section-content"><strong>Reproducible repo:</strong></div>
      <pre className="code-block">
{`git clone https://github.com/diyagangwar1/ValueVision_ML.git
pip install -e .
python train.py --config multimodal.yaml`}
      </pre>
      <div className="section-content">
        • Jupyter demo – interactive SHAP, MAE curves, residual maps.<br />
        • Slide deck &amp; 10-page final report (CS 158 submission).
      </div>
      <div className="section-divider"></div>

      {/* ========= 9 · REFLECTION & LESSONS ========= */}
      <div className="section-title">Reflection &amp; Lessons</div>
      <ul className="bullet-list">
        <li><strong>Multimodal ≠ magic —</strong> data quality trumps stream count.</li>
        <li><strong>Domain adaptation —</strong> CNNs must learn <em>housing</em> aesthetics, not ImageNet cats &amp; dogs.</li>
        <li><strong>Feature thrift —</strong> 1,300+ raw dims → <strong>60</strong> with negligible loss thanks to SVD.</li>
      </ul>
      <div className="section-divider"></div>

      {/* ========= 10 · NEXT STEPS ========= */}
      <div className="section-title">Next Steps</div>
      <ul className="bullet-list">
        <li>Fine-tune ResNet end-to-end on price-bin regression.</li>
        <li>Replace DistilBERT with SBERT-NLI for richer sentence pooling.</li>
        <li>Re-introduce graph-based neighborhood embeddings once API quotas stabilize.</li>
        <li>Deploy a Flask API + lightweight LightGBM model for live demos.</li>
      </ul>
      <div className="section-divider"></div>

    </div>
  );
};

export default ValueVisionContent;