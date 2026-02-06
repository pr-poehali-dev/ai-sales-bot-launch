-- Create leads table for storing customer requests
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    business_type VARCHAR(255) NOT NULL,
    monthly_leads INTEGER NOT NULL,
    whatsapp VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

-- Create index on created_at for faster sorting
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Create index on status for filtering
CREATE INDEX idx_leads_status ON leads(status);