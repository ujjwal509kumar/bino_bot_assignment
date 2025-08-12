'use client';

import { useState, useEffect } from 'react';

export function useSlugValidation() {
  const [slugStatus, setSlugStatus] = useState({
    isChecking: false,
    isAvailable: null,
    message: '',
    error: null
  });

  const checkSlug = async (slug) => {
    if (!slug || slug.length < 1) {
      setSlugStatus({
        isChecking: false,
        isAvailable: null,
        message: '',
        error: null
      });
      return;
    }

    // Basic format validation
    if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
      setSlugStatus({
        isChecking: false,
        isAvailable: false,
        message: 'Slug can only contain letters, numbers, hyphens, and underscores',
        error: 'INVALID_FORMAT'
      });
      return;
    }

    setSlugStatus(prev => ({ ...prev, isChecking: true }));

    try {
      const response = await fetch('/api/pages/check-slug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      const data = await response.json();

      if (data.success) {
        setSlugStatus({
          isChecking: false,
          isAvailable: data.available,
          message: data.message,
          error: null
        });
      } else {
        setSlugStatus({
          isChecking: false,
          isAvailable: false,
          message: data.message || 'Error checking slug',
          error: data.error
        });
      }
    } catch (error) {
      setSlugStatus({
        isChecking: false,
        isAvailable: false,
        message: 'Failed to check slug availability',
        error: 'NETWORK_ERROR'
      });
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedCheckSlug = debounce(checkSlug, 500);

  return {
    slugStatus,
    checkSlug: debouncedCheckSlug,
    resetSlugStatus: () => setSlugStatus({
      isChecking: false,
      isAvailable: null,
      message: '',
      error: null
    })
  };
}