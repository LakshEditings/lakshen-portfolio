import Papa from 'papaparse';

// Your Google Sheets CSV URLs
const SHEETS_CONFIG = {
  achievements: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3ItVPiLBmG3XHjv26iSA1qkTpqIV9FMpplI4icXQ8s0tIfT---FKmLpdmY7e0-KZmA0vResTLLcpp/pub?output=csv',
  projects: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTDbVMoiQwdZH634HNq9DNSDOYCx5tdmSSzUn3Q4wISXrtYyiMda9n1KA0LwW_oiYFmglBNNK9Rt5zO/pub?output=csv'
};

// Fetch data from Google Sheets CSV
const fetchSheetData = async (sheetType) => {
  try {
    // Add cache busting parameter to force fresh data
    const timestamp = new Date().getTime();
    const urlWithCacheBust = `${SHEETS_CONFIG[sheetType]}&_=${timestamp}`;
    
    console.log(`🔍 Fetching ${sheetType} from:`, urlWithCacheBust);
    
    const response = await fetch(urlWithCacheBust, {
      cache: 'no-store', // Don't use cached response
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    console.log(`📡 Response status for ${sheetType}:`, response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const csvText = await response.text();
    console.log(`📄 CSV text for ${sheetType}:`, csvText.substring(0, 200) + '...');
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false,
        complete: (results) => {
          console.log(`✅ Parsed ${sheetType} data:`, results.data);
          console.log(`📊 Number of rows:`, results.data.length);
          resolve(results.data);
        },
        error: (error) => {
          console.error(`❌ Parse error for ${sheetType}:`, error);
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error(`❌ Fetch error for ${sheetType}:`, error);
    throw error;
  }
};

// Get all achievements
export const getAchievements = async () => {
  try {
    const data = await fetchSheetData('achievements');
    console.log('🎯 Raw achievements data before mapping:', data);
    
    const mapped = data
      .filter(item => item.title && item.title.trim() !== '')
      .map(item => ({
        title: (item.title || '').trim(),
        subtitle: (item.subtitle || '').trim(),
        award: (item.award || '').trim(),
        type: (item.type || 'Finalist').trim(),
        linkedinpost: (item.linkedinpost || '').trim()
      }));
    
    console.log('🎯 Mapped achievements:', mapped);
    return mapped;
  } catch (error) {
    console.error('❌ Error getting achievements:', error);
    return [];
  }
};

// Get all projects
export const getProjects = async () => {
  try {
    const data = await fetchSheetData('projects');
    console.log('🎯 Raw projects data before mapping:', data);
    
    const mapped = data
      .filter(item => item.title && item.title.trim() !== '')
      .map(item => {
        // Handle tech field - might have quotes or be a plain string
        let techArray = [];
        if (item.tech) {
          const techStr = String(item.tech).replace(/^["']|["']$/g, ''); // Remove surrounding quotes
          techArray = techStr.split(',').map(t => t.trim()).filter(t => t);
        }
        
        return {
          title: (item.title || '').trim(),
          description: (item.description || '').trim(),
          status: (item.status || 'Ongoing').trim(),
          tech: techArray,
          link: (item.link || '').trim(),
          image: (item.image || '').trim()
        };
      });
    
    console.log('🎯 Mapped projects:', mapped);
    return mapped;
  } catch (error) {
    console.error('❌ Error getting projects:', error);
    return [];
  }
};
const googleSheets = {
  getAchievements,
  getProjects
};

export default googleSheets;