// Test if fetch is working at all
const testFetch = async () => {
  try {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3ItVPiLBmG3XHjv26iSA1qkTpqIV9FMpplI4icXQ8s0tIfT---FKmLpdmY7e0-KZmA0vResTLLcpp/pub?output=csv';
    
    console.log('Testing URL:', url);
    const response = await fetch(url);
    console.log('Response:', response);
    const text = await response.text();
    console.log('CSV Text:', text);
    
    return text;
  } catch (error) {
    console.error('Test failed:', error);
  }
};

testFetch();