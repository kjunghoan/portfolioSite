interface BookPosition {
  desktop: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  tablet?: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
  mobile?: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
}

interface BookDimensions {
  width: number;
  height: number;
  depth: number;
}

type BookDimensionsCollection = Record<string, Record<string, BookDimensions>>;

const pi = Math.PI;
const bookDimensions: BookDimensionsCollection = {
  desktop: {
    language: {
      width: 0.3,
      height: 1.25,
      depth: 0.6,
    },
    framework: {
      width: 0.25,
      height: 1,
      depth: 0.6,
    },
    library: {
      width: 0.24,
      height: 1,
      depth: 0.6,
    },
    database: {
      width: 0.275,
      height: 1,
      depth: 0.6,
    },
    cloud: {
      width: 0.24,
      height: 1,
      depth: 0.6,
    },
    backend_service: {
      width: 0.23,
      height: 1,
      depth: 0.6,
    },
    orm: {
      width: 0.21,
      height: 0.9,
      depth: 0.6,
    },
    version_control: {
      width: 0.15,
      height: 0.7,
      depth: 0.6,
    },
    text_editor: {
      width: 0.15,
      height: 1.2,
      depth: 0.6,
    },
    proxy: {
      width: 0.19,
      height: 0.9,
      depth: 0.6,
    },
    tool: {
      width: 0.2,
      height: 1,
      depth: 0.6,
    },
    misc: {
      width: 0.2,
      height: 1,
      depth: 0.6,
    },
    platform: {
      width: 0.17,
      height: 1,
      depth: 0.6,
    },
    other: {
      width: 0.13,
      height: 1,
      depth: 0.6,
    },
  },
  tablet: {
    language: {
      width: 0.14,
      height: 0.6,
      depth: 0.6,
    },
    framework: {
      width: 0.15,
      height: 0.55,
      depth: 0.6,
    },
    library: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    database: {
      width: 0.13,
      height: 0.65,
      depth: 0.6,
    },
    cloud: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    backend_service: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    orm: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    version_control: {
      width: 0.12,
      height: 0.65,
      depth: 0.6,
    },
    text_editor: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    proxy: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    tool: {
      width: 0.14,
      height: 0.65,
      depth: 0.6,
    },
    misc: {
      width: 0.15,
      height: 0.65,
      depth: 0.6,
    },
    platform: {
      width: 0.17,
      height: 0.65,
      depth: 0.6,
    },
    other: {
      width: 0.13,
      height: 0.65,
      depth: 0.6,
    },
  },
  mobile: {
    language: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    framework: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    library: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    database: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    cloud: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    backend_service: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    orm: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    version_control: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    text_editor: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    proxy: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    tool: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    misc: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    platform: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
    other: {
      width: 0.11,
      height: 0.5,
      depth: 0.25,
    },
  },
};
const bookPositions: Record<string, BookPosition> = {
  // Javascript based
  typescript: {
    desktop: {
      position: [-2.9, 0.6, 0.1],
      rotation: [0, 0, 0],
    },
    tablet: {
      position: [-0.67, 1.14, 0.02],
      rotation: [0, 0, 0.05],
    },
    mobile: {
      position: [-0.237, 1.35, 0],
      rotation: [0, 0, 0],
    },
  },
  express: {
    desktop: {
      position: [-2.55, 0.56, 0],
      rotation: [0, 0, 0.15],
    },
    tablet: {
      position: [-0.5, 1.14, 0],
      rotation: [0, 0, 0.05],
    },
    mobile: {
      position: [-0.12, 1.35, 0],
      rotation: [0, 0, 0],
    },
  },
  react: {
    desktop: {
      position: [-2.22, 0.58, 0.13],
      rotation: [0, 0, 0.27],
    },
    tablet: {
      position: [-0.33, 1.14, 0],
      rotation: [0, 0, 0.0525],
    },
    mobile: {
      position: [0, 1.35, 0],
      rotation: [0, 0, 0],
    },
  },
  tailwind: {
    desktop: {
      position: [-1.9, 0.52, 0],
      rotation: [0, 0, 0.35],
    },
    tablet: {
      position: [-0.165, 1.14, 0],
      rotation: [0, 0, 0.055],
    },
    mobile: {
      position: [0.115, 1.35, 0],
      rotation: [0, 0, 0],
    },
  },
  //  //==========================================
  //  // Java based
  java: {
    desktop: {
      position: [0.7, 0.15, 0],
      rotation: [0, 0, pi / 2],
    },
    tablet: {
      position: [0.235, 0.92, 0.01],
      rotation: [0, 0, pi / 2],
    },
    mobile: {
      position: [0.236, 1.35, 0],
      rotation: [0, 0, 0],
    },
  },
  spring: {
    desktop: {
      position: [0.7, 0.42, -0.1],
      rotation: [0, 0, pi / 2],
    },
    tablet: {
      position: [0.265, 1.09, -0.01],
      rotation: [0, -0.08, pi / 2],
    },
    mobile: {
      position: [-0.237, 0.625, 0],
      rotation: [0, 0, 0],
    },
  },
  //  //==========================================
  //  // python based
  python: {
    desktop: {
      position: [2.85, 0.65, 0],
      rotation: [0, 0, -0.15],
    },
    tablet: {
      position: [0.65, 1.15, 0],
      rotation: [0, 0, 0],
    },
    mobile: {
      position: [-0.12, 0.625, 0],
      rotation: [0, 0, 0],
    },
  },
  //  //==========================================
  //  // database
  postgresql: {
    desktop: {
      position: [-2.9, -1.1, 0],
      rotation: [0, 0, 0.1],
    },
    tablet: {
      position: [0.4, 0.12, 0],
      rotation: [0, 0.075, pi / 2],
    },
    mobile: {
      position: [0, 0.625, 0],
      rotation: [0, 0, 0],
    },
  },
  mongodb: {
    desktop: {
      position: [-2.59, -1.1, 0.1],
      rotation: [0, 0, 0.1],
    },
    tablet: {
      position: [0.4, 0.265, 0.01],
      rotation: [0, -0.05, pi / 2],
    },
    mobile: {
      position: [0.115, 0.625, 0],
      rotation: [0, 0, 0],
    },
  },
  mysql: {
    desktop: {
      position: [-2.25, -1.09, 0],
      rotation: [0, 0, 0.2],
    },
    tablet: {
      position: [0.4, 0.41, 0],
      rotation: [0, 0.075, pi / 2],
    },
    mobile: {
      position: [0.236, 0.625, 0],
      rotation: [0, 0, 0],
    },
  },
  pinecone: {
    desktop: {
      position: [-1.4, -1.48, 0],
      rotation: [0, 0.08, pi / 2],
    },
    tablet: {
      position: [0.4, 0.565, 0],
      rotation: [0, -0.015, pi / 2],
    },
    mobile: {
      position: [-0.237, -0.8, 0],
      rotation: [0, 0, 0],
    },
  },
  //  // infrastructure
  kubernetes: {
    desktop: {
      position: [-1.4, -1.21, 0],
      rotation: [0, -0.1, pi / 2],
    },
    tablet: {
      position: [-0.668, -0.43, -0.03],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [-0.12, -0.8, 0],
      rotation: [0, 0, 0],
    },
  },
  docker: {
    desktop: {
      position: [-1.4, -0.98, 0],
      rotation: [0, 0.1, pi / 2],
    },
    tablet: {
      position: [-0.515, -0.43, -0.0021],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [0, -0.8, 0],
      rotation: [0, 0, 0],
    },
  },
  aws: {
    desktop: {
      position: [2.47, 0.53, 0],
      rotation: [0, 0, -0.16],
    },
    tablet: {
      position: [-0.35, -0.43, 0.043],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [0.115, -0.8, 0],
      rotation: [0, 0, 0],
    },
  },
  jenkins: {
    desktop: {
      position: [-0.75, -1.1, 0],
      rotation: [0, 0, 0],
    },
    tablet: {
      position: [-0.18, -0.43, 0],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [0.236, -0.8, 0],
      rotation: [0, 0, 0],
    },
  },
  //  // virtualization
  proxmox: {
    desktop: {
      position: [1.88, -1.12, 0],
      rotation: [0, 0, -0.4],
    },
    tablet: {
      position: [-0.02, -0.43, -0.01],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [-0.237, -1.5, 0],
      rotation: [0, 0, 0],
    },
  },
  ceph: {
    desktop: {
      position: [2.6, -1.12, 0],
      rotation: [0, 0, -0.3],
    },
    tablet: {
      position: [0.14, -0.43, 0],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [-0.12, -1.5, 0],
      rotation: [0, 0, 0],
    },
  },
  // misc
  git: {
    // TODO
    desktop: {
      position: [-1.4, -0.77, 0],
      rotation: [0, -0.15, pi / 2],
    },
    tablet: {
      position: [0.3, -0.43, 0],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [0, -0.28, 0],
      rotation: [0, -0.2, pi / 2],
    },
  },
  nvim: {
    // TODO
    desktop: {
      position: [0.1, -1.55, 0],
      rotation: [0, 0, pi / 2],
    },
    tablet: {
      position: [0.467, -0.43, 0.04],
      rotation: [0, 0, 0.04],
    },
    mobile: {
      position: [0, -0.16, 0],
      rotation: [0, 0.2, pi / 2],
    },
  },
  nginx: {
    desktop: {
      position: [2.35, -1.15, 0],
      rotation: [0, 0, -0.35],
    },
    tablet: {
      position: [0.65, -0.43, 0],
      rotation: [0, 0, 0.1],
    },
    mobile: {
      position: [0.236, -1.5, 0],
      rotation: [0, 0, 0],
    },
  },
  traefik: {
    desktop: {
      position: [2.1, -1.16, -0.1],
      rotation: [0, 0, -0.4],
    },
    tablet: {
      position: [-0.68, -1.3, 0],
      rotation: [0, 0, 0],
    },
    mobile: {
      position: [0, -1.5, 0],
      rotation: [0, 0, 0],
    },
  },
  bash: {
    desktop: {
      position: [2.9, -1.1, 0.1],
      rotation: [0, 0, -0.1],
    },
    tablet: {
      position: [-0.51, -1.3, 0],
      rotation: [0, 0, 0],
    },
    mobile: {
      position: [0.115, -1.5, 0],
      rotation: [0, 0, 0],
    },
  },
};

export { bookPositions, bookDimensions };
