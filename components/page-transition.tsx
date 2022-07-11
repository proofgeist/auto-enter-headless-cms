import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter={true}>
      <motion.div
        key={router.asPath}
        variants={{
          hidden: { opacity: 0, x: 0, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: 0 },
        }}
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ duration: .25 }} // Set the transition to linear
        className=""
      >

        {children}
      </motion.div>
    </AnimatePresence>
  );
}