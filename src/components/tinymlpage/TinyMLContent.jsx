import React from 'react';
import coverImg from '../../assets/images/tinyml/cover.png';
import fig1 from '../../assets/images/tinyml/fig1.jpeg';
import fig2 from '../../assets/images/tinyml/fig2.png';
import '../../styles/ValueVisionContent.css'; // Reuse the same CSS for consistent styling

const TinyMLContent = () => {
  return (
    <div className="valuevision-content">
      {/* COVER IMAGE (at the very top, large and centered) */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2.5rem 0 2.5rem 0' }}>
        <img src={coverImg} alt="TinyML Project Cover" style={{ maxWidth: '600px', width: '100%', height: 'auto', borderRadius: '2rem', boxShadow: '0 8px 40px 8px rgba(0,0,0,0.32)', display: 'block', margin: '0 auto' }} />
      </div>
      {/* RESOURCES (moved to top) */}
      <section className="section">
        <div className="section-label">RESOURCES</div>
        <div className="resources-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '2rem' }}>
          <a href="https://drive.google.com/file/d/1Ys6SjnYwn_wP-AZ_aW7MXY0iV5Yx44tC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="resource-item" style={{ color: '#fff', textDecoration: 'underline' }}>
            <span className="resource-icon">📄</span> Full Documentation PDF
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="resource-item" style={{ color: '#fff', textDecoration: 'underline' }}>
            <span className="resource-icon">💻</span> GitHub Repository
          </a>
          <a href="https://github.com/espressif/esp-dl" target="_blank" rel="noopener noreferrer" className="resource-item" style={{ color: '#fff', textDecoration: 'underline' }}>
            <span className="resource-icon">📚</span> ESP-DL Library
          </a>
          <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/" target="_blank" rel="noopener noreferrer" className="resource-item" style={{ color: '#fff', textDecoration: 'underline' }}>
            <span className="resource-icon">🔧</span> ESP-IDF Documentation
          </a>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="section">
        <div className="section-label">UNDERGRADUATE RESEARCH</div>
        <h1 className="section-heading">Intermittent Machine Learning on Battery-less Embedded Systems</h1>
        <p className="section-title">Using the ESP32-S3 for Sustainable Edge Computing</p>
        <p className="content-text">Angelina Tsai & Diya Gangwar</p>
      </section>

      {/* CHALLENGE & OPPORTUNITY */}
      <section className="section">
        <div className="grid-row grid-2-col">
          <div className="grid-item">
            <h3 className="content-title">Challenge</h3>
            <p className="content-text">
              Implementing machine learning on intermittently powered devices with significant energy and memory constraints, requiring robust power management and efficient model deployment.
            </p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Opportunity</h3>
            <p className="content-text">
              To design and demonstrate a sustainable, battery-less IoT system capable of real-time AI tasks using solar energy harvesting, paving the way for scalable edge computing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="section">
        <div className="grid-row grid-4-col">
          <div className="grid-item">
            <h3 className="content-title">Timeline</h3>
            <p className="content-text">April 2025</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Disciplines</h3>
            <ul className="content-text">
              <li>Embedded Systems</li>
              <li>Machine Learning (TinyML)</li>
              <li>Energy Harvesting</li>
              <li>Circuit Design</li>
              <li>Power Management</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Responsibilities</h3>
            <ul className="content-text">
              <li>Hardware Design & Assembly</li>
              <li>Circuit Implementation</li>
              <li>Software Development (ESP-IDF)</li>
              <li>ML Model Deployment & Optimization</li>
              <li>System Testing & Validation</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Tools & Technologies</h3>
            <div className="tools-grid content-text">
              <span>ESP32-S3</span>
              <span>ESP-IDF</span>
              <span>ESP-DL</span>
              <span>TinyML</span>
              <span>Supercapacitor</span>
              <span>Solar Panel</span>
              <span>VS Code</span>
              <span>C/C++</span>
            </div>
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="section">
        <h2 className="section-title">Background: Sustainable Edge AI</h2>
        <div className="section-content">
          <p className="content-text">
            This project explores the feasibility of running machine learning models on ultra-low-power embedded systems powered entirely by harvested solar energy, eliminating the need for batteries. By leveraging the ESP32-S3 microcontroller and a supercapacitor for energy storage, we developed a real-time human face detection system. This battery-less approach addresses the environmental concerns of battery disposal and enables sustainable, scalable deployment of AI at the edge, particularly in remote or off-grid scenarios where traditional power sources are unavailable.
          </p>
        </div>
      </section>

      {/* HARDWARE COMPONENTS */}
      <section className="section">
        <h2 className="section-title">Hardware Components</h2>
        <div className="grid-row grid-3-col">
          <div className="grid-item">
            <h3 className="content-title">ESP32-S3 Wroom 1</h3>
            <p className="content-text">The core microcontroller unit, featuring Wi-Fi, Bluetooth, and sufficient processing power for TinyML tasks.</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">KEMET FG Supercapacitor</h3>
            <p className="content-text">Provides short-term energy storage, enabling operation during intermittent sunlight. (Datasheet available).</p>
            <a href="#" className="link-button" style={{ color: '#fff', textDecoration: 'underline' }}>Purchase</a>
            <a href="#" className="link-button" style={{ color: '#fff', textDecoration: 'underline' }}>Datasheet</a>
          </div>
          <div className="grid-item">
            <h3 className="content-title">5V Micro Solar Panel</h3>
            <p className="content-text">Harvests ambient light energy to power the system.</p>
            <a href="#" className="link-button" style={{ color: '#fff', textDecoration: 'underline' }}>Purchase</a>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Schottky Diodes</h3>
            <p className="content-text">Ensure unidirectional current flow, preventing energy leakage.</p>
            <a href="#" className="link-button" style={{ color: '#fff', textDecoration: 'underline' }}>Purchase</a>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Resistors (1.546 MΩ, 10.42 MΩ)</h3>
            <p className="content-text">Used to create the voltage divider circuit for monitoring and supplementation.</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Breadboard & Wires</h3>
            <p className="content-text">Used for prototyping and assembling the circuit components.</p>
            <a href="#" className="link-button" style={{ color: '#fff', textDecoration: 'underline' }}>Purchase</a>
          </div>
        </div>
      </section>

      {/* CIRCUIT DESIGN & IMPLEMENTATION */}
      <section className="section">
        <h2 className="section-title">Circuit Design & Implementation</h2>
        <div className="grid-row grid-2-col">
          <div className="grid-item">
            <h3 className="content-title">Design Principles</h3>
            <p className="content-text">The circuit features a supercapacitor in parallel with a voltage divider, powered by a 5V solar panel. The supercapacitor stores harvested energy, while the voltage divider helps supplement voltage during discharge and allows for monitoring. This design enables intermittent operation, relying on harvested energy rather than a battery. Schottky diodes prevent reverse current flow.</p>
            <h3 className="content-title">Assembly Steps</h3>
            <ol className="content-text">
              <li>Connect solar panel input/output to breadboard power rails.</li>
              <li>Assemble supercapacitor and Schottky diodes in series, connecting to the positive rail.</li>
              <li>Build the voltage divider using 1.546 MΩ and 10.42 MΩ resistors, connecting appropriately to power rails and the supercapacitor output line.</li>
              <li>Connect the combined output (supercapacitor/divider) to the ESP32's 3V3 pin and an ADC pin (e.g., GPIO7) for monitoring.</li>
              <li>Connect the ESP32's GND pin to the ground rail.</li>
            </ol>
            <p className="content-text"><strong>Note:</strong> Ensure correct diode orientation to prevent damage.</p>
          </div>
          <div className="grid-item">
            <img src={fig1} alt="Battery-less solar panel circuit diagram" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
            <p className="content-text" style={{ fontSize: '0.95rem', color: '#aaa' }}>Figure 1: Battery-less solar panel circuit diagram.</p>
            <img src={fig2} alt="Photo of the assembled circuit on a breadboard" style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }} />
            <p className="content-text" style={{ fontSize: '0.95rem', color: '#aaa' }}>Figure 2: Assembled battery-less circuit on breadboard.</p>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT ENVIRONMENT SETUP */}
      <section className="section">
        <h2 className="section-title">Development Environment Setup</h2>
        <div className="grid-row grid-4-col">
          <div className="grid-item">
            <h3 className="content-title">1. Install ESP-IDF</h3>
            <p className="content-text">Download and install the ESP-IDF software libraries and the VS Code extension for easier development.</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">2. Clone ESP-DL</h3>
            <p className="content-text">Clone the <code>espressif/esp-dl</code> repository which contains high-performance deep learning resources and examples.</p>
            <div className="code-block">
              <pre>{`git clone https://github.com/espressif/esp-dl.git\ncd ~/esp-dl/examples/human_face_detect`}</pre>
            </div>
          </div>
          <div className="grid-item">
            <h3 className="content-title">3. Configure Project</h3>
            <p className="content-text">Use the ESP-IDF command palette in VS Code to:</p>
            <ul className="content-text">
              <li>Select the correct serial port (e.g., <em>usbserial</em>).</li>
              <li>Set the device target to <code>esp32s3</code>.</li>
              <li>Configure PSRAM settings if needed (Octal).</li>
            </ul>
          </div>
          <div className="grid-item">
            <h3 className="content-title">4. Build, Flash & Monitor</h3>
            <p className="content-text">Build the project, flash it onto the ESP32-S3 device (using UART if OpenOCD fails), and monitor the output to see face detection results.</p>
          </div>
        </div>
      </section>

      {/* VOLTAGE MEASUREMENT SYSTEM */}
      <section className="section">
        <h2 className="section-title">Voltage Measurement System</h2>
        <div className="grid-row grid-2-col">
          <div className="grid-item">
            <h3 className="content-title">Hardware Configuration</h3>
            <p className="content-text">The ESP32's onboard Analog-to-Digital Converter (ADC) is used for voltage monitoring. We connected the circuit's output voltage to an ADC pin (GPIO7, which corresponds to ADC Channel 6).</p>
            <h3 className="content-title">Software Implementation</h3>
            <p className="content-text">ADC sampling occurs at 500ms intervals. Calibration (curve fitting) is attempted to compensate for non-linearity. If calibration fails, a linear approximation is used:</p>
            <div className="formula-block">
              <pre>{`Vmeasured = (ADCraw * 3.3V) / 4095`}</pre>
            </div>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Limitations</h3>
            <ul className="content-text">
              <li>Inherent non-linearity, especially at voltage extremes.</li>
              <li>Variable input impedance based on attenuation.</li>
              <li>Accuracy affected by temperature and supply voltage fluctuations.</li>
              <li>External ADC recommended for high-precision (&lt;1% error) applications.</li>
            </ul>
          </div>
        </div>
        <div className="code-block">
          <pre>{`// Simplified ADC Initialization (Illustrative)
static void init_power_monitoring() {
    adc1_config_width(ADC_WIDTH_BIT_12);
    adc1_config_channel_atten(ADC1_CHANNEL_6, ADC_ATTEN_DB_11); // GPIO7 is CH6, use 11dB for ~0-3.3V range
    // ADC Calibration (Example)
    esp_adc_cal_characteristics_t *adc_chars = calloc(1, sizeof(esp_adc_cal_characteristics_t));
    esp_adc_cal_value_t val_type = esp_adc_cal_characterize(ADC_UNIT_1, ADC_ATTEN_DB_11, ADC_WIDTH_BIT_12, 1100, adc_chars);
    // ... check val_type and use adc_chars for calibrated reading ...
}`}</pre>
        </div>
      </section>

      {/* SOFTWARE ARCHITECTURE */}
      <section className="section">
        <h2 className="section-title">Software Architecture for Intermittence</h2>
        <div className="grid-row grid-2-col">
          <div className="grid-item">
            <h3 className="content-title">State Management</h3>
            <p className="content-text">A hybrid event-driven/state machine architecture manages operation across power cycles. Key states include initialization, camera ready, image captured, and detection complete.</p>
            <div className="code-block">
              <pre>{`typedef enum {
    CHECKPOINT_INIT,
    CHECKPOINT_CAMERA_READY,
    CHECKPOINT_IMAGE_CAPTURED,
    CHECKPOINT_DETECTION_COMPLETE
} checkpoint_id_t;

typedef struct {
    uint32_t execution_count;
    uint32_t face_detections;
    bool was_processing;
    uint32_t last_face_timestamp;
} app_state_t;`}</pre>
            </div>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Checkpointing</h3>
            <p className="content-text">Non-Volatile Storage (NVS) is used to save the current state (checkpoint) before potential power loss. On reboot, the system loads the last checkpoint to resume operation.</p>
            <div className="code-block">
              <pre>{`// Simplified Checkpoint Handling
static void update_checkpoint(checkpoint_id_t cp) {
    nvs_handle_t handle;
    nvs_open("app_state", NVS_READWRITE, &handle);
    nvs_set_u8(handle, "checkpoint", cp);
    nvs_commit(handle);
    nvs_close(handle);
}

static checkpoint_id_t get_last_checkpoint() {
    // ... read checkpoint from NVS ...
}`}</pre>
            </div>
          </div>
        </div>
        <div className="grid-row grid-2-col">
          <div className="grid-item">
            <h3 className="content-title">Power Management</h3>
            <p className="content-text">The system monitors voltage via ADC. If voltage drops below a threshold (e.g., 2.8V), it saves the current state to NVS and enters deep sleep to conserve energy until sufficient power returns.</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Image Acquisition & Processing</h3>
            <p className="content-text">The pipeline involves configuring the camera, capturing a frame, decoding JPEG to RGB888, running the face detection model, and freeing resources. DRAM is used for frame buffer location for speed.</p>
            <div className="code-block">
              <pre>{`// Camera Config Snippet
static camera_config_t camera_config = {
    .pin_pwdn = GPIO_NUM_38,
    // ... other pins ...
    .pixel_format = PIXFORMAT_JPEG,
    .frame_size = FRAMESIZE_QVGA,
    .jpeg_quality = 12,
    .fb_count = 1,
    .fb_location = CAMERA_FB_IN_DRAM
};`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* TINYML MODEL IMPLEMENTATION */}
      <section className="section">
        <h2 className="section-title">TinyML Face Detection</h2>
        <div className="grid-row grid-2-col">
          <div className="grid-item">
            <h3 className="content-title">Model & Framework</h3>
            <p className="content-text">Utilizes the HumanFaceDetect model from the ESP-DL library, optimized for ESP32 microcontrollers. This lightweight model performs inference directly on the device.</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Inference Pipeline</h3>
            <p className="content-text">The captured and decoded RGB image is fed into the <code>detector.run()</code> method, which performs the face detection inference and returns bounding box results.</p>
            <div className="code-block">
              <pre>{`// Simplified Inference Snippet
dl::image::jpeg_img_t jpeg_img = { ... }; // From camera buffer
dl::image::img_t rgb_img;
sw_decode_jpeg(jpeg_img, rgb_img, true);

HumanFaceDetect detector;
auto results = detector.run(rgb_img); 
// 'results' contains detected face bounding boxes`}</pre>
            </div>
          </div>
        </div>
        <div className="section-content">
          <h3 className="content-title">Challenges & Optimizations</h3>
          <p className="content-text">Deploying ML on resource-constrained devices requires careful optimization. Using DRAM for the frame buffer (<code>CAMERA_FB_IN_DRAM</code>) improves speed but increases power consumption during capture. Model quantization and efficient C++ implementation are crucial.</p>
        </div>
      </section>

      {/* RESULTS & PERFORMANCE (Placeholder) */}
      <section className="section">
        <h2 className="section-title">Results & Performance</h2>
        <div className="section-content">
          <p className="content-text">This section would typically detail the system's performance, including face detection accuracy under various lighting conditions, power consumption measurements during different operational states (active, sleep, inference), the effectiveness of the intermittent computing strategy (number of successful resumes vs. power cycles), and comparisons to battery-powered systems. Quantitative data and visualizations would be presented here.</p>
        </div>
      </section>

      {/* FUTURE DIRECTIONS (Placeholder) */}
      <section className="section">
        <h2 className="section-title">Future Directions</h2>
        <div className="grid-row grid-3-col">
          <div className="grid-item">
            <h3 className="content-title">Hardware Optimization</h3>
            <p className="content-text">Explore more efficient solar panels or energy harvesting techniques. Investigate lower-power microcontrollers or alternative energy storage (e.g., thin-film batteries).</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">Software Enhancements</h3>
            <p className="content-text">Implement more sophisticated state prediction or adaptive checkpointing strategies. Optimize the ML model further for speed and energy efficiency.</p>
          </div>
          <div className="grid-item">
            <h3 className="content-title">New Applications</h3>
            <p className="content-text">Adapt the platform for other TinyML tasks like keyword spotting, anomaly detection, or simple gesture recognition in off-grid environments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TinyMLContent;
